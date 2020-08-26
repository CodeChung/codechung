import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30aac94c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _98cb0ac2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _9d509554 = () => interopDefault(import('../pages/Jokes/index.vue' /* webpackChunkName: "pages/Jokes/index" */))
const _4802972a = () => interopDefault(import('../pages/Portfolio/index.vue' /* webpackChunkName: "pages/Portfolio/index" */))
const _bfeb957e = () => interopDefault(import('../pages/Jokes/_id/index.vue' /* webpackChunkName: "pages/Jokes/_id/index" */))
const _40080d15 = () => interopDefault(import('../pages/Portfolio/_id/index.vue' /* webpackChunkName: "pages/Portfolio/_id/index" */))
const _5062a411 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _30aac94c,
    name: "about"
  }, {
    path: "/contact",
    component: _98cb0ac2,
    name: "contact"
  }, {
    path: "/Jokes",
    component: _9d509554,
    name: "Jokes"
  }, {
    path: "/Portfolio",
    component: _4802972a,
    name: "Portfolio"
  }, {
    path: "/Jokes/:id",
    component: _bfeb957e,
    name: "Jokes-id"
  }, {
    path: "/Portfolio/:id",
    component: _40080d15,
    name: "Portfolio-id"
  }, {
    path: "/",
    component: _5062a411,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
