//函数式组件，只传入数据，不做响应
export default {
    functional: true,
    props: {
        num: Number,
        renderFunc: Function
    },
    render: (h, ctx) => {
        return ctx.props.renderFunc(h, ctx.props.num)
    }
}