import { useAuthStore } from '@/stores/authStore'
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
        {
          path: '/profile/:id',
          name: 'Profile',
          component: Profile,
          props: true,
          meta: { requiresAuth: true }
        },
        {
          path: '/profile',
          component: Profile,
          meta: { requiresAuth: true }
        },
        { path: '/Feed',
          name: 'Feed',
          component: Feed,
          meta: {
            requiresAuth: true
          }
        },
        { path: '/notifications',
          name: 'Notifications',
          component: Notifications,
          meta: { requiresAuth: true }
        },
        { path: '/Settings',
          name: 'Settings',
          component: Settings,
          meta: { requiresAuth: true }
        },
        { path: '/',
          name: 'Home',
          component: Home,
          meta: { requiresAuth: true }
        },
      ]
    },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]




export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'Login' }); // redirect to login
  } else {
    next(); // allow access
  }
});

export default router
