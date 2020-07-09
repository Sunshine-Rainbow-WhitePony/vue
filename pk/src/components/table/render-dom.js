export default {
    functional: true,
    props: {
        params: Object,
        renderFunc: Function
    },
    render: (h, ctx) => {
        return ctx.props.renderFunc(h, ctx.props.params)
    }
}