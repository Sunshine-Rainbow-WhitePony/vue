 <!-- 
    参数：
    className: 自定义样式的class名称
    title：弹出层标题
    width：弹出层宽度
    height：弹出层高度
    sure: 确认按钮回调
    cancel：（取消按钮、右上角叉叉、点击蒙层）关闭弹窗回调
-->
<template>
    <transition name="fade">
        <div class="popup" v-show="isShow" @click.self="cancel">
            <div
                class="window"
                :style="{ width: `${width}px`, height: `${height}px` }"
            >
                <div class="p-title">
                    <span>{{ title }}</span>
                    <img
                        class="close"
                        src="../../assets/images/icon-colse.png"
                        @click="cancel"
                    />
                </div>
                <div class="p-content" :class="className">
                    <slot></slot>
                </div>
                <div class="p-btns">
                    <div class="btn cancel" @click="cancel">取消</div>
                    <div class="btn sure" @click="submit">确认</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        className:{
            type: String,
            default: ''
        },
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            isShow: false
        };
    },
    watch: {
        value() {
            this.isShow = this.value;
        }
    },
    methods: {
        closePopup() {
            this.isShow = false;
            this.$emit("input", this.isShow);
        },
        cancel() {
            this.closePopup();
            this.$emit("cancel");
        },
        submit() {
            this.closePopup();
            this.$emit("sure");
        }
    }
};
</script>
<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.popup {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(25, 59, 104, 0.2);
    width: 100%;
    height: 100%;
    .window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 24px 48px 0px rgba(25, 59, 104, 0.12),
            0px 0px 8px 0px rgba(25, 59, 104, 0.04);
        border-radius: 8px;
        padding-bottom: 87px;
        .p-title {
            line-height: 48px;
            border: 1px solid rgba(25, 59, 104, 0.06);
            span {
                font-size: 16px;
                font-weight: 600;
                color: rgba(25, 59, 104, 1);
                margin-left: 24px;
            }
            .close {
                width: 16px;
                height: 16px;
                float: right;
                margin-top: 16px;
                margin-right: 16px;
                cursor: pointer;
            }
        }
        .p-btns {
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 87px;
            border-top: 1px solid rgba(25, 59, 104, 0.06);
            text-align: right;
            .btn {
                display: inline-block;
                width: 76px;
                height: 40px;
                background: rgba(25, 59, 104, 0.04);
                border-radius: 4px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(25, 59, 104, 1);
                text-align: center;
                line-height: 40px;
                margin-right: 16px;
                margin-top: 23px;
                cursor: pointer;
                &:active {
                    background: rgba(25, 59, 104, 0.06);
                }
            }
            .sure {
                background: rgba(20, 121, 255, 1);
                box-shadow: 0px 2px 12px 0px rgba(20, 121, 255, 0.24);
                color: rgba(255, 255, 255, 1);
                margin-right: 24px;
                &.disabled {
                    background: rgba(161, 201, 255, 1);
                }
                &:hover {
                    background: rgba(20, 114, 239, 1);
                    box-shadow: unset;
                }
                &:active {
                    background: rgba(14, 107, 231, 1);
                    box-shadow: unset;
                }
            }
        }
    }
}
</style>