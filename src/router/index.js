import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMainBlock from '@/views/MainBlock.vue'
import PagBlogVue from '@/views/PagBlog.vue'
import MyPostVue from '@/views/MyPost.vue'


Vue.use(VueRouter)

const routes = [
{
  path:'/',
  name:'PageMainBlock',
  component: PageMainBlock
},
{
  path:'/PagBlog',
  name:'PagBlog',
  component: PagBlogVue,
},
{
  path:'/PagBlog/:id',
  name:'MyPostVue',
  component: MyPostVue,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router
