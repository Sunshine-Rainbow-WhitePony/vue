<template>
    <div class="content">
        <header>
            <div class="pk-logo">
                <img src="@/assets/images/pk-logo.png" alt />
            </div>
            <div class="pk-title">清华大学附属小学</div>
            <div class="pk-user">
                <img src="@/assets/images/pk-user.png" alt />
            </div>
        </header>
        <div class="main">
            <div class="main-left">
                <ul>
                    <!-- <li
            v-for="(item,index) in navList"
            :key="index"
            @click="addClass(index)"
            v-bind:class="{active:index==current}"
          >
            <router-link :to="item.link">
              <span>{{item.name}}</span>
            </router-link>
          </li> -->
                    <router-link
                        tag="li"
                        v-for="(item, index) in navList"
                        :key="index"
                        :to="item.link"
                    >
                        <span>{{ item.name }}</span>
                    </router-link>
                </ul>
            </div>
            <div class="main-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            current: 0,
            navList: [
                { name: "学期管理", link: "/SemesterManage" },
                { name: "年级班级管理", link: "/ClassManage" },
                { name: "学生管理", link: "/StudentManage" },
                { name: "学科管理", link: "/ObjectManage" },
                { name: "教室管理", link: "/ClassroomManage" }
            ],
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        addClass: function(index) {
            this.current = index;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.generate-columns(@n, @i: 1) when (@i =< @n) {
    &:nth-child(@{i}) {
        background: url("./../assets/images/icon-nav-@{i}.png") no-repeat 24px center;
        background-size: 18px 18px;
    }
    &.active:nth-child(@{i}) {
        background: url("./../assets/images/icon-nav-active-@{i}.png") no-repeat 24px center;
        background-size: 18px 18px;
        font-weight: 600;
        color: rgba(25, 59, 104, 1);
    }
    .generate-columns(@n, (@i + 1));
}
.content {
    overflow: hidden;
    header {
        height: 56px;
        background: rgba(255, 255, 255, 1);
        .pk-logo {
            float: left;
            width: 240px;
            img {
                display: block;
                width: 96px;
                height: 56px;
                margin-left: 24px;
            }
        }
        .pk-title {
            float: left;
            font-size: 16px;
            font-weight: bold;
            color: rgba(25, 59, 104, 1);
            line-height: 56px;
            text-indent: 32px;
        }
        .pk-user {
            float: right;
            margin: 16px 24px 16px 0;
            img {
                display: block;
                width: 24px;
                height: 24px;
            }
        }
    }

    .main {
        width: 100%;
        overflow: hidden;
        .main-left {
            width: 240px;
            float: left;
            height: calc(100vh - 56px);
            background: #ffffff;
            ul {
                overflow: hidden;
                margin-top: 32px;
                li {
                    display: block;
                    height: 40px;
                    margin-bottom: 8px;
                    font-size: 14px;
                    line-height: 40px;
                    overflow: hidden;
                    display: block;
                    color: rgba(25, 59, 104, 1);
                    cursor: pointer;
                    span {
                        display: block;
                        padding-left: 58px;
                        height: 40px;
                        text-align: left;
                    }
                    .generate-columns(5);
                }
            }
        }
        .main-right {
            min-width: 1080px;
            width: calc(100vw - 240px);
            height: calc(100vh - 56px);
            float: right;
            overflow-x: auto;
        }
    }
}
</style>
