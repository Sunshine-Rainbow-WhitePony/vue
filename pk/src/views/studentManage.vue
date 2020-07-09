<template>
    <div id="studentManage">
        <div class="con">
            <div class="top-tab">
                <ul>
                    <li
                        :class="{ active: tabIndex === i }"
                        v-for="(item, i) in classes"
                        :key="i"
                        @click="tabIndex = i"
                    >
                        <div class="flag">
                            <i>{{ item.name | classFlag }}</i>
                        </div>
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="con-top">
                <div class="btns">
                    <div class="btn select" id="selectClass">
                        <div class="select-show">
                            <span title="">（）班</span>
                            <i class="edge"></i>
                        </div>
                        <div class="select-list" style="width: 244px;">
                            <div class="list-con">
                                <ul>
                                    <li data-tt="1">
                                        <i class="checkbox"></i>
                                        <span>（1）班</span>
                                    </li>
                                    <li data-tt="2">
                                        <i class="checkbox"></i>
                                        <span>（2）班</span>
                                    </li>
                                    <li data-tt="3">
                                        <i class="checkbox"></i>
                                        <span>（3）班</span>
                                    </li>
                                    <li data-tt="4">
                                        <i class="checkbox"></i>
                                        <span>（4）班</span>
                                    </li>
                                    <li data-tt="5">
                                        <i class="checkbox"></i>
                                        <span>（5）班</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li data-tt="6">
                                        <i class="checkbox"></i>
                                        <span>（6）班</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="select-all">
                                <i class="checkbox"></i>
                                <span>全年级</span>
                            </div>
                        </div>
                    </div>
                    <div class="btn" id="addStudentBtn">
                        <img src="../assets/images/add.png" alt="" />
                        <span>添加学生</span>
                    </div>
                    <div class="btn" id="upSemesterBtn">
                        <img src="../assets/images/icon-rise.png" alt="" />
                        <span>升学年</span>
                    </div>
                </div>
                <div class="page">
                    <span class="text1">
                        第 <i>1 - 10</i> 条， 共 <i>14</i> 条
                    </span>
                    <div class="toggle-page">
                        <i class="prev"></i>
                        <i class="next active"></i>
                    </div>
                </div>
            </div>
            <div class="table-area">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>年度</th>
                            <th>学期名</th>
                            <th>第一学期</th>
                            <th>第二学期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>2020 - 2021</td>
                            <td>20 - 21学年</td>
                            <td>2020.03.01 - 2020.07.20</td>
                            <td>
                                2020.09.01 - 2021.01.20
                                <div class="opt">
                                    <div class="edit">
                                        <img src="../assets/images/edit.png" />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img
                                            src="../assets/images/icon-delete.png"
                                        />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>2020 - 2021</td>
                            <td>20 - 21学年</td>
                            <td>2020.03.01 - 2020.07.20</td>
                            <td>
                                2020.09.01 - 2021.01.20
                                <div class="opt">
                                    <div class="edit">
                                        <img src="../assets/images/edit.png" />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img
                                            src="../assets/images/icon-delete.png"
                                        />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>2020 - 2021</td>
                            <td>20 - 21学年</td>
                            <td>2020.03.01 - 2020.07.20</td>
                            <td>
                                2020.09.01 - 2021.01.20
                                <div class="opt">
                                    <div class="edit">
                                        <img src="../assets/images/edit.png" />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img
                                            src="../assets/images/icon-delete.png"
                                        />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>2020 - 2021</td>
                            <td>20 - 21学年</td>
                            <td>2020.03.01 - 2020.07.20</td>
                            <td>
                                2020.09.01 - 2021.01.20
                                <div class="opt">
                                    <div class="edit">
                                        <img src="../assets/images/edit.png" />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img
                                            src="../assets/images/icon-delete.png"
                                        />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>2020 - 2021</td>
                            <td>20 - 21学年</td>
                            <td>2020.03.01 - 2020.07.20</td>
                            <td>
                                2020.09.01 - 2021.01.20
                                <div class="opt">
                                    <div class="edit">
                                        <img src="../assets/images/edit.png" />
                                        <div class="tip">编辑</div>
                                    </div>
                                    <div class="delete">
                                        <img
                                            src="../assets/images/icon-delete.png"
                                        />
                                        <div class="tip">删除</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "StudentManage",
    data() {
        return {
            classes: [
                {
                    name: "一年级"
                },
                {
                    name: "二年级"
                },
                {
                    name: "三年级"
                },
                {
                    name: "四年级"
                },
                {
                    name: "五年级"
                },
                {
                    name: "六年级"
                }
            ],
            tabIndex: 0,

            /* tableDate: [
                {
                    index: 01,
                    yearRange: 
                }
            ] */
        };
    },
    filters: {
        classFlag(val) {
            return val.replace("年级", "");
        }
    }
};
</script>
<style scoped lang="less">
@import "../assets/css/common";
#studentManage {
    overflow: hidden;
}
</style>