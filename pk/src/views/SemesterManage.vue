<template>
    <div id="semesterManage">
        <div class="con">
            <div class="con-top">
                <div class="btns">
                    <div class="btn" @click="createSemesterPopupShow = true">
                        <img src="../assets/images/icon-create.png" alt="" />
                        <span>新建学期</span>
                    </div>
                    <div class="btn" @click="upPopupShow = true">
                        <img src="../assets/images/icon-rise.png" alt="" />
                        <span>升学年</span>
                    </div>
                </div>
                <Page
                    class="page-box"
                    :total="33"
                    :curr="1"
                    :pageSize="6"
                    @toggle="togglePage"
                ></Page>
            </div>
            <Table :columns="tableColumns" :data="tableDate"></Table>
        </div>
        <!-- 弹出层组件 -->
        <Popup
            :className="'create-semester'"
            v-model="createSemesterPopupShow"
            :title="'新建学期'"
            :width="432"
            :height="473"
            @sure="semesterSure"
        >
            <div class="form-area">
                <div class="row">
                    <p class="label required">年度</p>
                    <Select v-model="model1" style="width:184px">
                        <Option
                            v-for="item in years"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                        >
                    </Select>
                </div>
                <div class="row">
                    <p class="label required">学期名称</p>
                    <input
                        class="inp"
                        type="text"
                        placeholder="请输入学期名称"
                    />
                </div>
                <div class="row">
                    <p class="label required">第一学期</p>
                    <DatePicker
                        type="daterange"
                        placeholder="请选择"
                        split-panels
                        :editable="false"
                        format="yyyy.MM.dd"
                    ></DatePicker>
                </div>
                <div class="row">
                    <p class="label required">第二学期</p>
                    <DatePicker
                        type="daterange"
                        placeholder="请选择"
                        split-panels
                        :editable="false"
                        format="yyyy.MM.dd"
                    ></DatePicker>
                </div>
            </div>
        </Popup>
        <Popup
            :className="'up-semester'"
            v-model="upPopupShow"
            :title="'升学年'"
            :width="432"
            :height="281"
        >
            <div class="form-area">
                <div class="btn">新学期开始第一天</div>
                <DatePicker
                    type="date"
                    placeholder="请选择"
                    split-panels
                    :editable="false"
                    format="yyyy.MM.dd"
                ></DatePicker>
            </div>
        </Popup>
    </div>
</template>
<script>
import Popup from "@/components/popup";
import Table from "@/components/table";
import Page from "@/components/page";

import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/icon-delete.png";

export default {
    name: "SemesterManage",
    components: {
        Popup,
        Table,
        Page
    },
    data() {
        return {
            createSemesterPopupShow: false,
            upPopupShow: false,

            tableColumns: [
                {
                    title: "",
                    key: "index"
                },
                {
                    title: "年度",
                    key: "yearRange"
                },
                {
                    title: "学期名",
                    key: "semester"
                },
                {
                    title: "第一学期",
                    key: "firstSemester"
                },
                {
                    title: "第二学期",
                    key: "secondSemester",
                    render: (h, params) => {
                        return (
                            <div>
                                <span>{params.curr}</span>
                                <div class="opt">
                                    <div class="edit">
                                        <img src={editImg} />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img src={deleteImg} />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            ],
            tableDate: [
                {
                    yearRange: "2020 - 2021",
                    semester: "20 - 21学年",
                    firstSemester: "2020.03.01 - 2020.07.20",
                    secondSemester: "2020.09.01 - 2021.01.20"
                },
                {
                    yearRange: "2020 - 2021",
                    semester: "20 - 21学年",
                    firstSemester: "2020.03.01 - 2020.07.20",
                    secondSemester: "2020.09.01 - 2021.01.20"
                },
                {
                    yearRange: "2020 - 2021",
                    semester: "20 - 21学年",
                    firstSemester: "2020.03.01 - 2020.07.20",
                    secondSemester: "2020.09.01 - 2021.01.20"
                },
                {
                    yearRange: "2020 - 2021",
                    semester: "20 - 21学年",
                    firstSemester: "2020.03.01 - 2020.07.20",
                    secondSemester: "2020.09.01 - 2021.01.20"
                }
            ],

            years: [
                {
                    value: 1,
                    label: "2017年度"
                },
                {
                    value: 2,
                    label: "2018年度"
                },
                {
                    value: 3,
                    label: "2019年度"
                },
                {
                    value: 4,
                    label: "2020年度"
                }
            ]
        };
    },
    methods: {
        semesterSure() {
            console.log(1);
        },
        togglePage(curr) {
            console.log(curr);
        }
    }
};
</script>
<style lang="less">
@import "../assets/css/common";
#semesterManage {
    overflow: hidden;

    .create-semester {
        .form-area {
            padding: 22px 24px 0;
            .row {
                margin-bottom: 14px;
                .label {
                    font-size: 12px;
                    font-weight: 600;
                    color: rgba(25, 59, 104, 1);
                    margin-bottom: 6px;
                    &.required:after {
                        content: " *";
                        font-size: 12px;
                        font-weight: bold;
                        color: rgba(255, 82, 82, 1);
                    }
                }
                .inp {
                    width: 384px;
                    height: 40px;
                    border-radius: 4px;
                    border: 1px solid rgba(25, 59, 104, 0.06);
                    background: rgba(25, 59, 104, 0.02);
                    font-size: 14px;
                    color: rgba(25, 59, 104, 1);
                    text-indent: 16px;
                    &::placeholder {
                        color: rgba(25, 59, 104, 0.3);
                    }
                    &:focus {
                        border: 1px solid rgba(20, 121, 255, 1);
                        background: #fff;
                    }
                }

                .ivu-select-selection {
                    height: 40px;
                    border: 1px solid rgba(25, 59, 104, 0.06);
                    background: rgba(25, 59, 104, 0.02);
                }
                .ivu-select-visible .ivu-select-selection {
                    border: 1px solid rgba(20, 121, 255, 1);
                    background: #fff;
                    box-shadow: unset;
                }
                .ivu-select-single
                    .ivu-select-selection
                    .ivu-select-placeholder,
                .ivu-select-single
                    .ivu-select-selection
                    .ivu-select-selected-value {
                    padding-left: 16px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                }
                .ivu-select-placeholder {
                    color: rgba(25, 59, 104, 0.3);
                }
                .ivu-select-selected-value {
                    color: rgba(25, 59, 104, 1);
                }

                .ivu-date-picker {
                    display: block;

                    .ivu-input {
                        height: 40px;
                        line-height: 40px;
                        background-color: transparent;
                        border: 1px solid rgba(25, 59, 104, 0.06);
                        background: rgba(25, 59, 104, 0.02)
                            url(../assets/images/icon-time.png) 354px center
                            no-repeat;
                        border-radius: 4px;
                        padding: 0 16px;
                        font-size: 14px;
                        color: rgba(25, 59, 104, 1);
                        transition: unset;
                        box-shadow: unset;
                        &::placeholder {
                            color: rgba(25, 59, 104, 0.3);
                        }
                        &:focus {
                            border: 1px solid rgba(20, 121, 255, 1);
                            background: #fff url(../assets/images/icon-time.png)
                                354px center no-repeat;
                        }
                    }
                    .ivu-icon-ios-calendar-outline:before {
                        content: "";
                    }
                    .ivu-input-suffix i {
                        font-size: 0;
                    }
                }

                .num {
                    width: 184px;
                }
            }
        }
    }

    .up-semester {
        .form-area {
            padding: 24px;
            .btn {
                width: 144px;
                height: 40px;
                border-radius: 4px;
                border: 1px solid rgba(25, 59, 104, 0.06);
                background: rgba(25, 59, 104, 0.02);
                font-size: 14px;
                font-weight: 400;
                color: rgba(25, 59, 104, 1);
                text-align: center;
                line-height: 40px;
            }
            /* input {
                width: 224px;
                height: 40px;
                border-radius: 4px;
                border: 1px solid rgba(25, 59, 104, 0.06);
                font-size: 14px;
                color: rgba(25, 59, 104, 1);
                text-indent: 16px;
                background: rgba(25, 59, 104, 0.02)
                    url(../assets/images/icon-time.png) 194px center no-repeat;
                &::placeholder {
                    color: rgba(25, 59, 104, 0.3);
                }
                &:focus {
                    border: 1px solid rgba(20, 121, 255, 1);
                    background: #fff url(../assets/images/icon-time.png) 194px
                        center no-repeat;
                }
            } */

            .ivu-date-picker {
                margin-top: 16px;
                display: block;
                width: 224px;

                .ivu-input {
                    height: 40px;
                    line-height: 40px;
                    background-color: transparent;
                    border: 1px solid rgba(25, 59, 104, 0.06);
                    background: rgba(25, 59, 104, 0.02)
                        url(../assets/images/icon-time.png) 194px center
                        no-repeat;
                    border-radius: 4px;
                    padding: 0 16px;
                    font-size: 14px;
                    color: rgba(25, 59, 104, 1);
                    transition: unset;
                    box-shadow: unset;
                    &::placeholder {
                        color: rgba(25, 59, 104, 0.3);
                    }
                    &:focus {
                        border: 1px solid rgba(20, 121, 255, 1);
                        background: #fff url(../assets/images/icon-time.png)
                            194px center no-repeat;
                    }
                }
                .ivu-icon-ios-calendar-outline:before {
                    content: "";
                }
                .ivu-input-suffix i {
                    font-size: 0;
                }
            }
        }
    }
}
</style>