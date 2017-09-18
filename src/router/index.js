import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'index',
      path: '/',
      component:()=>import('../components/page/bookshelf/bookshelf.vue')
    },
    {
    	name:'sort',
    	path:'/sort',
    	component:()=>import('../components/page/sort/sort.vue')
    },
    {
    	name:'rank',
    	path:'/rank',
    	component:()=>import('../components/page/rank/rank.vue')
    },
    {
    	name:'search',
    	path:'/search',
    	component:()=>import('../components/page/search/search.vue')
    }
  ]
})
