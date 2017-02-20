import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import CategoryMenu from 'components/header/CategoryNva/CategoryMenu'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CategoryMenu',
      component: CategoryMenu
    }
  ]
})
