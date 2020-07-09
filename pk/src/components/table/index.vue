<template>
    <div class="table-area">
        <table>
            <thead>
                <tr>
                    <th v-for="(item,i) in columns" :key="i">{{item.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in data" :key="i">
                    <td v-for="(column,j) in columns" :key="j">
                        <span v-if="!column.render">{{ column.key === 'index' ? formatIndex(i+1) : item[column.key] }}</span>
                        <render-dom v-else :renderFunc="column.render" :params="{curr:item[column.key],row:item}"></render-dom>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import RenderDom from './render-dom'
export default {
    name: "Table",
    components: {
        RenderDom,
    },
    props:{
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{

        }
    },
    methods: {
        formatIndex(i){
            return i < 10 ? '0' + i : i
        }
    }
};
</script>
<style lang="less">
.table-area {
    padding: 0 32px 58px;
    table {
        border-collapse: separate;
        border-spacing: 0px 4px;
    }
    thead {
        tr {
            height: 40px;
            background: rgba(25, 59, 104, 0.03);
            border-radius: 4px;
            th {
                font-size: 12px;
                font-weight: 600;
                color: rgba(25, 59, 104, 0.59);
            }
        }
    }
    tbody {
        tr {
            height: 48px;
            border-radius: 4px;
            td {
                text-align: center;
                border-top: 1px solid rgba(25, 59, 104, 0.06);
                border-bottom: 1px solid rgba(25, 59, 104, 0.06);
                position: relative;
                font-size: 14px;
                font-weight: 900;
                color: rgba(25, 59, 104, 1);

                &:first-child {
                    border-left: 1px solid rgba(25, 59, 104, 0.06);
                    color: rgba(25, 59, 104, 0.29);
                }

                &:last-child {
                    border-right: 1px solid rgba(25, 59, 104, 0.06);
                }

                .opt {
                    display: none;
                    position: absolute;
                    right: 8px;
                    top: 8px;
                    .edit,
                    .delete {
                        float: left;
                        width: 32px;
                        height: 32px;
                        position: relative;
                        cursor: pointer;
                        img {
                            width: 16px;
                            height: 16px;
                            margin-top: 8px;
                            -webkit-filter: grayscale(100%);
                            -moz-filter: grayscale(100%);
                            -ms-filter: grayscale(100%);
                            -o-filter: grayscale(100%);
                            filter: grayscale(100%);
                        }
                        .tip {
                            display: none;
                            position: absolute;
                            bottom: -27px;
                            left: -4px;
                            width: 40px;
                            height: 27px;
                            background: url(../../assets/images/shape.png);
                            text-align: center;
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 1);
                            line-height: 32px;
                        }
                        &:hover {
                            background: rgba(25, 59, 104, 0.04);
                            border-radius: 4px;
                            img {
                                -webkit-filter: grayscale(0);
                                -moz-filter: grayscale(0);
                                -ms-filter: grayscale(0);
                                -o-filter: grayscale(0);
                                filter: grayscale(0);
                            }
                            .tip {
                                display: block;
                            }
                        }
                    }
                }
            }
            &:hover {
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 24px 48px 0px rgba(25, 59, 104, 0.12),
                    0px 0px 8px 0px rgba(25, 59, 104, 0.04);
                td {
                    .opt {
                        display: block;
                    }
                    &:first-child {
                        color: rgba(25, 59, 104, 1);
                    }
                }
            }
        }
    }
}
</style>