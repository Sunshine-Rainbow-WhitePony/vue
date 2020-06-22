<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from "countup";
import "./count-to.less"
export default {
  name: "CountTo",
  computed: {
    eleId() {
      //每一个组件都有自己的uid
      return `count_up_${this._uid}`;
    },
    countClass() {
      return [
        "count-to-number", //当前组件默认的类名
        this.className //传入的类名
      ];
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  props: {
    statVal: {
      //起始值
      type: Number,
      default: 0
    },
    endVal: {
      //最终值
      type: Number,
      required: true //必填
    },
    delay: {
      //自定义新加值，动画开始延迟时间
      type: Number,
      default: 0
    },
    decimals: {
      //表示小数点后保留几位小数
      type: Number,
      default: 0
    },
    duration: {
      //动画持续时间，单位秒
      type: Number,
      default: 1
    },
    useEasing: {
      //是否使用变速效果，值为true时，速度会有变化，为false时，速度为匀速
      type: Boolean,
      default: false
    },
    useGrouping: {
      //是否使用分组
      type: Boolean,
      default: true
    },
    sepatator: {
      //分组分隔符号
      type: String,
      default: ","
    },
    decimal: {
      //整数和小数分隔符号
      type: String,
      default: "."
    },
    className: {
      type: String,
      default: ""
    }
  },
  methods: {
    getCount() {
        return this.$refs.number.innerText
    },
    emitEndEvent(){
      setTimeout(() => {
        this.$nextTick(()=>{
          this.$emit("on-animation-end", Number(this.getCount()))
        })
      },this.duration * 1000 + 5)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted() {
    //nextTick是元素渲染完成后回调
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.eleId, //CountUp第一参数是元素的id值，由于这是组件，所以可能会被多次使用，id值就会重复，所以要生成唯一id
        this.statVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          sepatator: this.sepatator,
          decimal: this.decimal
        }
      );

      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay);
    });
  }
};
</script>