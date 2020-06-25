import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a278730 = () => interopDefault(import('../pages/graficos.vue' /* webpackChunkName: "pages/graficos" */))
const _16adf215 = () => interopDefault(import('../pages/moedas.vue' /* webpackChunkName: "pages/moedas" */))
const _0612cc40 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/graficos",
    component: _6a278730,
    name: "graficos"
  }, {
    path: "/moedas",
    component: _16adf215,
    name: "moedas"
  }, {
    path: "/",
    component: _0612cc40,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
