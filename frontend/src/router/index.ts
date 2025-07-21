import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('@/pages/Home.vue') },
      // { path: 'explore', component: () => import('@/pages/Explore.vue') },
      // { path: 'notifications', component: () => import('@/pages/Notifications.vue') },
      // {
      //   path: 'profile/:id',
      //   component: () => import('@/layouts/ProfileLayout.vue'),
      //   children: [
      //     { path: '', component: () => import('@/pages/Profile.vue') },
      //     { path: 'followers', component: () => import('@/pages/Followers.vue') },
      //     { path: 'following', component: () => import('@/pages/Following.vue') },
      //   ],
      // },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('@/pages/auth/Login.vue') },
      { path: 'register', component: () => import('@/pages/auth/Register.vue') },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/Dashboard.vue') }, // Future admin/analytics page
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
