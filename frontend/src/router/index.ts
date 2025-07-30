import { createRouter, createWebHistory } from 'vue-router'
// Lazy-loaded views for better performance

var Feed = () => import('@/pages/FeedPage.vue')
var Home = () => import('@/pages/HomePage.vue')
var Login = () => import('@/pages/LoginPage.vue')
var NotFound = () => import('@/pages/NotFound.vue')
var Notifications = () => import('@/pages/NotificationsPage.vue')
var Profile = () => import('@/pages/ProfilePage.vue')
var Register = () => import('@/pages/RegisterPage.vue')
var Settings = () => import('@/pages/SettingsPage.vue')
var dashboard = () => import('@/pages/DashboardPage.vue')
var AuthLayout = ()=> import('@/layouts/AuthLayout.vue')
var AppLayout = ()=> import('@/layouts/AppLayout.vue')

const routes = [


    { path: '/auth', component: AuthLayout,
      children: [
        { path: '/login',  name:'Log In', component: Login },
        { path: '/register', name:'Register',  component: Register },
      ]
  },
    { path: '/', component: AppLayout,
      children: [
        { path: '/profile/:id', name: 'Profile', component: Profile, props: true },
        { path: '/profile', component: Profile },
        { path: '/Feed', name: 'Feed', component: Feed },
        // { path: '/dashboard', name: 'Dashboard', component: dashboard },
        { path: '/notifications', name: 'Notifications', component: Notifications },
        { path: '/Settings', name: 'Settings', component: Settings },
        { path: '/', name: 'Home', component: Home },
      ]
    },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]




export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
