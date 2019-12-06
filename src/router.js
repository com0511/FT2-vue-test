import Vue from 'vue'
import Router from 'vue-router'
import BbsList from './components/BbsList'
import BbsDetails from './components/BbsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: BbsList, },
    { path: '/details/:id', name: 'details', component: BbsDetails }
  ]
})
