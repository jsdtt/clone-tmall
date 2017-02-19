import Vue from 'vue'
import Router from 'vue-router'
import CategoryMenu from 'components/header/CategoryNva/CategoryMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CategoryMenu',
      component: CategoryMenu
    }
  ]
})
