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
      name:'sort_detail',
      path:'/sort/details:id',
      component:()=>import('../components/page/sort_details/sort_details.vue')
    },
    {
    	name:'rank',
    	path:'/rank',
    	component:()=>import('../components/page/rank/rank.vue')
    },
    {
      name:'rankList',
      path:'/rank/rankList/:id',
      component:()=>import('../components/page/rank/rankList.vue')
    },
    {
    	name:'search',
    	path:'/search',
    	component:()=>import('../components/page/search/search.vue')
    }
  ]
})
