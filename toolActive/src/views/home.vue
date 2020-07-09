<template>
    <div class="hello">
        <div class="top">
            <div class="bg">
                <img class="color" :src="bgImg" alt="" />
                <div class="op"></div>
            </div>
            <div class="top-con">
                <div class="header">
                    <!-- <div class="back" @click="back">
                        <img src="../assets/images/back.png" alt="" />
                        <span>返回</span>
                    </div> -->
                    <p>活动平台</p>
                </div>
                <div class="swiper">
                    <van-swipe
                        class="my-swipe"
                        :autoplay="3000"
                        @change="swipeChange"
                    >
                        <van-swipe-item
                            v-for="(img, index) in images"
                            :key="index"
                        >
                            <img :src="img" alt="" />
                        </van-swipe-item>
                        <template #indicator>
                            <div class="line-indicator">
                                <ul>
                                    <li
                                        v-for="(img, index) in images"
                                        :key="`indicator${index}`"
                                        :class="{ active: current === index }"
                                    ></li>
                                </ul>
                            </div>
                        </template>
                    </van-swipe>
                </div>
            </div>
        </div>
        <div class="active-show">
            <div class="l-title">
                <span>活动列表</span>
                <ul class="sort-type">
                    <li
                        :class="{ active: sortType }"
                        @click="srotToggle(true, 2)"
                    >
                        按开始时间排序
                    </li>
                    <li
                        :class="{ active: !sortType }"
                        @click="srotToggle(false, 4)"
                    >
                        按热度排序
                    </li>
                </ul>
            </div>
            <div class="tags" :class="{ active: tagsIsShow }">
                <ul>
                    <li
                        v-for="item in tagsData"
                        :key="item.id"
                        :class="{ active: tagsActive.includes(item.id) }"
                        @click="toggleActive(item.id)"
                    >
                        {{ item.name }}
                    </li>
                </ul>
                <div class="opt" @click="tagsIsShow = !tagsIsShow">
                    <img
                        :class="{ down: tagsIsShow }"
                        src="../assets/images/sj.png"
                        alt=""
                    />
                    <span v-show="!tagsIsShow">展开</span>
                    <span v-show="tagsIsShow">收起</span>
                </div>
            </div>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    :error.sync="error"
                    error-text="请求失败，点击重新加载"
                >
                    <ul class="list">
                        <li
                            v-for="(item, i) in list"
                            :key="i"
                            @click="showInfo(item.id)"
                        >
                            <div
                                class="fm"
                                :style="{
                                    background: `#2B333B url(${item.coverSrc}) center no-repeat`
                                }"
                            ></div>
                            <div class="info">
                                <p class="name">{{ item.title }}</p>
                                <p class="time">
                                    {{
                                        item.startTime | timestamp(item.endTime)
                                    }}
                                </p>
                                <p class="adress">{{ item.addres }}</p>
                                <p class="organizer">{{ item.organizer }}</p>
                                <p class="view">{{ item.tagName }}</p>
                            </div>
                        </li>
                    </ul>
                </van-list>
            </van-pull-refresh>
        </div>
        <van-popup v-model="popupShow" position="bottom" class="popup">
            <div class="p-title">
                <span>活动详情</span>
                <img
                    class="close"
                    src="../assets/images/close.png"
                    @click="
                        popupShow = false;
                        codeShow = false;
                    "
                />
            </div>
            <div class="scroll">
                <div class="act-info">
                    <div class="text-info">
                        <div class="act-title">{{ activeInfo.title }}</div>
                        <div class="row">
                            <p class="text1">活动时间</p>
                            <span class="text2 sm">{{
                                activeInfo.startTime
                                    | timestamp(activeInfo.endTime)
                            }}</span>
                        </div>
                        <div class="row">
                            <p class="text1">活动类型</p>
                            <span class="text2">{{ activeInfo.tagName }}</span>
                        </div>
                        <div class="row">
                            <p class="text1">主办方</p>
                            <span class="text2">{{
                                activeInfo.organizer
                            }}</span>
                        </div>
                        <div class="row">
                            <p class="text1">活动人数</p>
                            <span class="text2"
                                >{{ activeInfo.joinNumber }} /
                                {{ maxJoinCount }}</span
                            >
                        </div>
                    </div>
                    <div class="act-img">
                        <img :src="activeInfo.coverSrc" alt="" />
                    </div>
                </div>
                <div class="act-intro">
                    <span class="i-title">活动介绍</span>
                    <div class="i-con" v-html="activeInfo.descr"></div>
                </div>
            </div>
            <div class="act-sign-up" @click="codeShow = !codeShow">
                <img src="../assets/images/code.png" alt="" />
                <span>活动报名</span>
                <div v-show="codeShow" class="dialog">
                    <div ref="qrcode"></div>
                    <p>扫描二维码报名</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import img1 from "../assets/images/temp/1.png";
import img2 from "../assets/images/temp/2.png";

import { getActiveList, getActiveTags, getActiveInfo } from "@/api/active.js";
import QRCode from "qrcodejs2";

export default {
    name: "home",
    data() {
        return {
            images: [img1, img2],
            bgImg: img1,
            current: 0,

            //tags
            sortType: true,
            tagsIsShow: false,
            tagsData: [],
            tagsActive: [],

            //筛选条件
            tag: "",
            orderType: "", //1-开始时间升序，2-开始时间降序，3-热度升序，4-热度降序

            //活动列表
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            error: false,
            currPage: 1,
            pageSize: 10,
            randerImgFirst: true,

            popupShow: false,
            codeShow: false,
            qrcode: null,

            activeInfo: {},

            fidEnc: ""
        };
    },
    created() {
        const urlParams = new URLSearchParams(
            document.location.hash.substring(3)
        );
        this.fidEnc = urlParams.get("fidEnc");

        let tagReq = new FormData();
        tagReq.append("curPage", 1);
        tagReq.append("pageSize", 100);
        tagReq.append("fidEnc", this.fidEnc);
        getActiveTags(tagReq)
            .then(res => {
                this.tagsData = res.info.list;
            })
            .catch(err => {
                console.log(err);
            });
    },
    computed: {
        maxJoinCount() {
            return this.activeInfo.maxJoinCount
                ? this.activeInfo.maxJoinCount
                : "不限";
        },
    },
    filters: {
        timestamp: function(start, end) {
            function handleNum(num){
                return num > 9 ? num : '0'+num
            }

            let s = new Date(start);
            let s1 = s.getFullYear()+"."+handleNum(s.getMonth())+"."+handleNum(s.getDate());
            let e = new Date(end);
            let e1 = e.getFullYear()+"."+handleNum(e.getMonth())+"."+handleNum(e.getDate());
            if (s1 === e1) {
                return (
                    s1 +
                    " " +
                    handleNum(s.getHours()) +
                    ":" +
                    handleNum(s.getMinutes()) +
                    " - " +
                    handleNum(e.getHours()) +
                    ":" +
                    handleNum(e.getMinutes())
                );
            } else {
                return (
                    s1 +
                    " " +
                    handleNum(s.getHours()) +
                    ":" +
                    handleNum(s.getMinutes()) +
                    " - " +
                    e1 +
                    " " +
                    handleNum(e.getHours()) +
                    ":" +
                    handleNum(e.getMinutes())
                );
            }
        }
    },
    methods: {
        back() {
            this.$router.back(-1);
        },
        swipeChange(index) {
            this.current = index;
            this.bgImg = this.images[this.current];
        },
        srotToggle(bol, type) {
            this.sortType = bol;
            this.orderType = type;
            this.refreshing = true;
            this.onRefresh();
        },
        toggleActive(id) {
            const index = this.tagsActive.indexOf(id);
            if (index === -1) this.tagsActive.push(id);
            else this.tagsActive.splice(index, 1);
            this.tag = this.tagsActive.toString();
            this.refreshing = true;
            this.onRefresh();
        },
        onLoad() {
            let formData = new FormData();
            formData.append("curPage", this.currPage);
            formData.append("pageSize", this.pageSize);
            // formData.append("fidEnc", "e4466e1bcd4c3a57")
            formData.append("fidEnc", this.fidEnc);
            formData.append("tag", this.tag);
            formData.append("orderType", this.orderType);

            getActiveList(formData)
                .then(res => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }
                    this.currPage++;
                    let data =
                        typeof res === "string" ? eval("(" + res + ")") : res;
                    if (this.randerImgFirst && data.info.list.length >= 3) {
                        this.randerImgFirst = false;
                        this.images = [
                            data.info.list[0].coverSrc,
                            data.info.list[1].coverSrc,
                            data.info.list[2].coverSrc
                        ];
                        this.bgImg = this.images[0];
                    }
                    this.list = this.list.concat(data.info.list);
                    this.loading = false;
                    this.finished = !data.info.hasNext;
                })
                .catch(err => {
                    console.log(err)
                    this.error = true
                });
        },
        onRefresh() {
            this.finished = false;
            this.currPage = 1;
            this.loading = true;
            this.onLoad();
        },
        showInfo(id) {
            this.popupShow = true;
            let formDate = new FormData();
            formDate.append("isView", 1);
            formDate.append("id", id);
            getActiveInfo(formDate)
                .then(res => {
                    this.activeInfo =
                        typeof res === "string"
                            ? eval("(" + res + ")").info
                            : res.info;
                    this.$refs.qrcode.innerHTML = "";
                    this.qrcode = new QRCode(this.$refs.qrcode, {
                        width: 140,
                        height: 140,
                        render: "table",
                        text:
                            "https://xyhd.chaoxing.com/views/toolActiveIntro.html?appId=1000&id=" +
                            this.activeInfo.id // 二维码内容
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="less">
@import "../assets/tool";
.top {
    position: relative;
    .bg {
        overflow: hidden;
        position: relative;
        .color {
            width: 100%;
            height: 422px;
            -webkit-filter: blur(64px);
            filter: blur(64px);
            transform: scale(2);
        }
        .op {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
        }
    }
    .top-con {
        position: absolute;
        top: 0;
        width: 100%;
    }
    .header {
        line-height: 104px;
        position: relative;
        .back {
            width: 120px;
            height: 44px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 22px;
            border: 2px solid rgba(255, 255, 255, 1);
            line-height: 40px;
            position: absolute;
            top: 32px;
            left: 40px;
            font-size: 0;
            img {
                vertical-align: middle;
                margin-left: 14px;
            }
            span {
                vertical-align: middle;
                font-size: 28px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                margin-left: 11px;
            }
        }
        p {
            font-size: 36px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            text-align: center;
        }
    }
    .swiper {
        width: 1000px;
        height: 400px;
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0px 6px 20px 0px rgba(19, 21, 37, 0.15);
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            height: 400px;
            img {
                height: inherit;
                width: 100%;
            }
        }
    }
    .line-indicator {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        li {
            float: left;
            width: 30px;
            height: 6px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 2px;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
            &.active {
                background: rgba(255, 255, 255, 1);
            }
        }
    }
}
.active-show {
    margin-top: 101px;

    .l-title {
        line-height: 112px;
        padding: 0 40px;
        span {
            font-size: 36px;
            font-weight: 500;
            color: rgba(43, 51, 59, 1);
        }

        .sort-type {
            float: right;
            li {
                float: left;
                font-size: 26px;
                font-weight: 500;
                color: rgba(153, 153, 153, 1);
                margin-left: 20px;
                &.active {
                    color: rgba(43, 51, 59, 1);
                    position: relative;
                    &::after {
                        content: "";
                        width: 100%;
                        height: 2px;
                        background: rgba(0, 153, 255, 1);
                        border-radius: 1px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 34px;
                    }
                }
            }
        }
    }
    .tags {
        overflow: hidden;
        padding: 0 40px;

        ul {
            float: left;
            overflow: hidden;
            width: 926px;
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: flex-end;
            justify-content: flex-end;
            flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            li {
                display: none;
                min-width: 120px;
                height: 34px;
                background: rgba(235, 235, 235, 1);
                border-radius: 17px;
                padding: 0 16px;
                line-height: 34px;
                text-align: center;
                font-size: 22px;
                font-weight: 400;
                color: rgba(183, 183, 183, 1);
                margin-bottom: 20px;
                margin-right: 20px;
                &:nth-child(-n + 4) {
                    display: block;
                }
                &.active {
                    background: rgba(204, 235, 255, 1);
                    color: rgba(0, 153, 255, 1);
                }
            }
        }

        &.active {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 10px 9px rgba(0, 0, 0, 0.21);
            position: absolute;
            z-index: 9;
            ul {
                -webkit-justify-content: flex-start;
                justify-content: flex-start;
                padding-bottom: 20px;
                li {
                    display: block;
                }
            }
        }

        .opt {
            float: right;
            line-height: 34px;
            font-size: 0;
            img {
                vertical-align: middle;
                margin-right: 8px;
                &.down {
                    transform: rotate(180deg);
                }
            }
            span {
                vertical-align: middle;
                font-size: 22px;
                font-weight: 500;
                color: rgba(0, 153, 255, 1);
            }
        }
    }
    .list {
        padding: 20px 40px;
        overflow: hidden;
        li {
            float: left;
            width: 320px;
            height: 380px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 10px 0px rgba(19, 21, 37, 0.1);
            border-radius: 10px;
            margin-right: 20px;
            margin-bottom: 20px;
            overflow: hidden;
            &:nth-child(3n) {
                margin-right: 0;
            }
            .fm {
                display: block;
                width: 320px;
                height: 200px;
            }

            .info {
                height: 180px;
                padding: 0 15px;
                position: relative;
                .name {
                    margin-top: 8px;
                    font-size: 26px;
                    font-weight: 500;
                    color: rgba(43, 51, 59, 1);
                    .ellipsis(290px);
                }
                .time {
                    .text(16px, 400, rgba(153, 153, 153, 1));
                    margin-top: 12px;
                }
                .adress,
                .organizer {
                    .text(22px, 400, rgba(153, 153, 153, 1));
                    margin-top: 7px;
                    .ellipsis(10em);
                }
                .view {
                    font-size: 22px;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    position: absolute;
                    bottom: 21px;
                    right: 15px;
                }
            }
        }
    }
}

.popup {
    height: 1300px;
    background: rgba(255, 255, 255, 1);
    border-radius: 40px 40px 0px 0px;
    .p-title {
        line-height: 104px;
        text-align: center;
        position: relative;
        span {
            font-size: 36px;
            font-weight: 500;
            color: rgba(43, 51, 59, 1);
        }
        .close {
            position: absolute;
            top: 30px;
            right: 30px;
        }
    }

    .scroll {
        height: ~"calc(100% - 104px)";
        overflow-y: auto;
        padding-top: 34px;
        padding-bottom: 34px;
    }
    .act-info {
        padding: 0 40px;
        overflow: hidden;
        margin-bottom: 78px;

        .text-info {
            width: 500px;
            float: left;
            .act-title {
                font-size: 26px;
                font-weight: 500;
                color: rgba(43, 51, 59, 1);
                line-height: 38px;
                margin-bottom: 34px;
            }
            .row {
                margin-bottom: 13px;

                .text1 {
                    width: 4em;
                    font-size: 26px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    text-align: left;
                    display: inline-block;
                    margin-right: 30px;
                }
                .text2 {
                    font-size: 26px;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                .sm {
                    font-size: 20px;
                }
            }
        }
        .act-img {
            float: left;
            margin-left: 20px;
            width: 480px;
            height: 300px;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: inherit;
                height: inherit;
            }
        }
    }
    .act-intro {
        padding: 0 40px;
        .i-title {
            font-size: 26px;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
        }
        .i-con {
            margin-top: 19px;
            font-size: 26px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 38px;
            // text-align: center;
            p {
                text-align: left;
            }
            img {
                max-width: 100%;
                margin: 20px 0;
            }
        }
    }

    .act-sign-up {
        width: 180px;
        height: 60px;
        background: rgba(0, 153, 255, 1);
        border-radius: 16px;
        position: fixed;
        bottom: 100px;
        right: 40px;
        text-align: center;
        line-height: 60px;
        img {
            vertical-align: middle;
            margin-right: 10px;
        }
        span {
            vertical-align: middle;
            font-size: 26px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }

        .dialog {
            position: absolute;
            top: -258px;
            border-radius: 10px;
            width: 180px;
            height: 208px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 43px 0px rgba(19, 21, 37, 0.26);
            padding: 20px;
            font-size: 0;
            p {
                font-size: 20px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 29px;
                margin-top: 8px;
            }

            &:after {
                content: "";
                display: block;
                position: absolute;
                bottom: -39px;
                left: 50%;
                transform: translate(-50%);
                border: 20px solid;
                border-color: #fff transparent transparent transparent;
            }
        }
    }
}
</style>
