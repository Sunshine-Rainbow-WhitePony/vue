<template>
    <div class="page">
        <span class="text1">
            第 <i>{{ firstNum }} - {{ lastNum }}</i> 条， 共
            <i>{{ total }}</i> 条
        </span>
        <div class="toggle-page">
            <i class="prev" :class="{ active: hasPrev }" @click="prev"></i>
            <i class="next" :class="{ active: hasNext }" @click="next"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "Page",
    props: {
        total: {
            type: Number,
            default: 0
        },
        curr: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            hasPrev: false,
            hasNext: this.pageSize < this.total,
            current: this.curr
        };
    },
    computed: {
        firstNum() {
            return this.current === 1
                ? 1
                : (this.current - 1) * this.pageSize + 1;
        },
        lastNum() {
            const last = this.current * this.pageSize
            return last > this.total ? this.total : last;
        }
    },
    watch: {},
    methods: {
        prev() {
            if (this.hasPrev) {
                this.current--
                this.$emit('toggle',this.current)
                this.isActive()
            }
        },
        next() {
            if (this.hasNext) {
                this.current++
                this.$emit('toggle',this.current)
                this.isActive()
            }
        },
        isActive() {
            if (this.firstNum === 1) {
                this.hasPrev = false
            } else {
                this.hasPrev = true
            }
            if (this.lastNum >= this.total) {
                this.hasNext = false
            } else {
                this.hasNext = true
            }
        }
    }
};
</script>
<style lang="less">
.page {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .text1 {
        float: left;
        font-size: 14px;
        font-weight: 400;
        color: rgba(25, 59, 104, 0.4);
        i {
            color: rgba(25, 59, 104, 0.8);
        }
    }
    .toggle-page {
        float: left;
        margin-left: 18px;
        i {
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
            cursor: pointer;
            border-radius: 4px;
        }
        .prev {
            margin-right: 20px;
            background: url(../../assets/images/page-prev.png) center no-repeat;
            &.active {
                background: url(../../assets/images/page-prev-a.png) center
                    no-repeat;
                &:hover {
                    background: rgba(25, 59, 104, 0.04)
                        url(../../assets/images/page-prev-a.png) center
                        no-repeat;
                }
                &:active {
                    background: rgba(25, 59, 104, 0.06)
                        url(../../assets/images/page-prev-a.png) center
                        no-repeat;
                }
            }
        }

        .next {
            margin-right: 10px;
            background: url(../../assets/images/page-next.png) center no-repeat;
            &.active {
                background: url(../../assets/images/page-next-a.png) center
                    no-repeat;
                &:hover {
                    background: rgba(25, 59, 104, 0.04)
                        url(../../assets/images/page-next-a.png) center
                        no-repeat;
                }
                &:active {
                    background: rgba(25, 59, 104, 0.06)
                        url(../../assets/images/page-next-a.png) center
                        no-repeat;
                }
            }
        }
    }
}
</style>