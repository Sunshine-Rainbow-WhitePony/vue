export default [{
    path: '/',
    name: 'home',
    component: () =>
        import ('@/views/home.vue'),
    meta: {
        keepAlive: true
    }
}]