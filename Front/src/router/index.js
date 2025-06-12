import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import authApi from '@/libs/apis/auth'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue';
import Category from '../views/Dashboard/category.vue';
import Item from '../views/Dashboard/item.vue';
import Product from '../views/Dashboard/product.vue';
import authapi from '../libs/apis/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/product/:id',
      name: 'checkout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Checkout.vue')
    },
    {
      path: '/homepage',
      name: 'homepage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomepageView.vue')
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Order.vue')
    },

    {
      path: '/login',
      name: 'auth/login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/signup',
      name: 'auth/signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/lightstick',
      name: 'lightstick',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LightstickView.vue')
    },
    {
      path: '/merch',
      name: 'merch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MerchView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'category',
          name: 'dashboard/category',
          component: Category
        },
        {
          path: 'item',
          name: 'dashboard/item',
          component: Item,
        },
        {
          path: 'product',
          name: 'dashboard/product',
          component: Product,
        },
      ],
    },
  ]
})
// router.beforeEach(async (to, from, next) => {
//   const me = await authApi.getMe();
//   const isAuthenticated = !!me
//   if (to.name.includes('dashboard') && !isAuthenticated) next({ name: 'auth/login' })
//   if (to.name.includes('auth') && isAuthenticated) next({ name: 'dashborad' })
//   else next()
// })

export default router
