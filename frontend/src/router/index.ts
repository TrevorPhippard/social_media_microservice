import { createRouter, createWebHistory } from 'vue-router'
// Lazy-loaded views for better performance

var Feed = () => import('@/pages/Feed.vue')
var Followers = () => import('@/pages/Followers.vue')
var Following = () => import('@/pages/Following.vue')
var Friends = () => import('@/pages/Friends.vue')
var Home = () => import('@/pages/Home.vue')
var Login = () => import('@/pages/Login.vue')
var Marketplace = () => import('@/pages/Marketplace.vue')
var NotFound = () => import('@/pages/NotFound.vue')
var Notifications = () => import('@/pages/Notifications.vue')
var PostDetails = () => import('@/pages/PostDetails.vue')
var Profile = () => import('@/pages/Profile.vue')
var Register = () => import('@/pages/Register.vue')
var Settings = () => import('@/pages/Settings.vue')

const routes = [

  { path: '/login',  name:'Log In', component: Login },
  { path: '/register', name:'Register',  component: Register },

  { path: '/', name: 'Home', component: Home },
  { path: '/friends', name: 'Friends', component: Friends },
  { path: '/marketplace', name: 'Marketplace', component: Marketplace },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },


  { path:'/Feed', name: 'Feed', component: Feed},
  { path:'/Followers', name: 'Followers', component: Followers},
  { path:'/Following', name: 'Following', component: Following},
  { path:'/PostDetails', name: 'PostDetails', component: PostDetails},
  { path:'/Settings', name: 'Settings', component: Settings},

  { path: '/profile/:id', name: 'Profile', component: Profile, props: true },
  { path: '/profile', component: Profile },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
