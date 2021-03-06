import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import adminDashboard from '@/views/admin/dashboard'
import teacherDashboard from '@/views/dashboard'
import courseInfo from '@/views/courseInfo'
import review from '@/views/teacher/review'
import totalMark from '@/views/teacher/totalMark'

// Login
import Login from '@/views/Login'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true }
];

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Full,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { roles: ['admin'] },
        component: adminDashboard
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { roles: ['teacher', 'ta', 'student'] },
        component: teacherDashboard
      },
      {
        path: 'courseInfo/:courseId',
        name: 'CourseInfo',
        meta: { roles: ['teacher', 'ta', 'student'] },
        component: courseInfo
      },
      {
        path: 'review/:homeworkId',
        name: 'Review',
        meta: { roles: ['teacher', 'ta'] },
        component: review
      },
      {
        path: 'totalMark/:courseId',
        name: 'TotalMark',
        meta: { roles: ['teacher', 'ta'] },
        component: totalMark
      }
    ]
  }
];
