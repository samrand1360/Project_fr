import Layout from 'layouts/MainLayout.vue'
import store from 'src/store'

export const router = [
  {
    path: '/login',
    name: "Login",
    component: () => import('pages/LoginPage.vue'),
  },

  {
    path: '/NotFound',
    name: "NotFound",
    component: () => import('pages/ErrorNotFound.vue'),
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      name: 'MainPage',

      component: () => import('src/pages/MainPage.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/payment',
    component: Layout,
    redirect: '/payment',
    children: [{
      path: '/payment',
      name: 'Payment',
      component: () => import('pages/PaymentPage.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },


  { path: '/:catchAll(.*)*', redirect: '/NotFound' }
]



export default router

