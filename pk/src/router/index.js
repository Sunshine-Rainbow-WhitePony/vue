import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
/* // 学期管理
import SemesterManage from '@/components/SemesterManage.vue'
// 年级班级管理
import ClassManage from '@/components/classManage.vue'
// 学生管理
import StudentManage from '@/components/studentManage.vue'
// 学科管理
import ObjectManage from '@/components/studentManage.vue'
// 教室管理
import ClassroomManage from '@/components/classroomManage.vue' */

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/SemesterManage',
        children: [{
                path: "/SemesterManage",
                name: "SemesterManage",
                component: () =>
                    import ('@/views/SemesterManage.vue')
            },
            {
                path: "/ClassManage",
                name: "ClassManage",
                component: () =>
                    import ('@/views/classManage.vue')
            },
            {
                path: "/StudentManage",
                name: "StudentManage",
                component: () =>
                    import ('@/views/studentManage.vue')
            },
            {
                path: "/ObjectManage",
                name: "ObjectManage",
                component: () =>
                    import ('@/views/SemesterManage.vue')
            },
            {
                path: "/ClassroomManage",
                name: "ClassroomManage",
                component: () =>
                    import ('@/views/classroomManage.vue')
            }
        ],
    }, ]
})