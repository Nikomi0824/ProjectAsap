import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMainBlock from '@/views/MainBlock.vue'




Vue.use(VueRouter)

const routes = [
{
  path:'/PageMainBlock',
  name:'PageMainBlock',
  component: PageMainBlock
},
{
  path:'/PagBlog',
  name:'PagBlog',
  component: () => import(/* webpackChunkName: "about" */ '../views/PagBlog.vue')
}

  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
