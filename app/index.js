import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './config/router.config'

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  // history: true,
  saveScrollPosition: true
})

// config router
configRouter(router)

// bootstrap the app
const App = Vue.extend(require('./components/app.vue'))
router.start(App,'#app')

// just for the debug
window.router = router
