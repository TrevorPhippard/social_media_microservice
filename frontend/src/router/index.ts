import { createRouter, createWebHistory } from 'vue-router'
// Lazy-loaded views for better performance

var Feed = () => import('@/pages/Feed.vue')
var Home = () => import('@/pages/Home.vue')
var Login = () => import('@/pages/Login.vue')
var NotFound = () => import('@/pages/NotFound.vue')
var Notifications = () => import('@/pages/Notifications.vue')
var Profile = () => import('@/pages/Profile.vue')
var Register = () => import('@/pages/Register.vue')
var Settings = () => import('@/pages/Settings.vue')
var AuthLayout = ()=> import('@/layouts/AuthLayout.vue')

const routes = [


    { path: '/auth', component: AuthLayout,
      children: [
        { path: '/login',  name:'Log In', component: Login },
        { path: '/register', name:'Register',  component: Register },
      ]
    },

  { path: '/Feed', name: 'Feed', component: Feed },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path:'/Settings', name: 'Settings', component: Settings},
  { path: '/profile/:id', name: 'Profile', component: Profile, props: true },
  { path: '/profile', component: Profile },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', name: 'Home', component: Home },
]




export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
