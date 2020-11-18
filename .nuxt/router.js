import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f27ce26 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _4347fcf7 = () => interopDefault(import('..\\pages\\friends\\index.vue' /* webpackChunkName: "pages/friends/index" */))
const _5e2db702 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ca241794 = () => interopDefault(import('..\\pages\\note\\index.vue' /* webpackChunkName: "pages/note/index" */))
const _2d41a006 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _740a0eec = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _49cc7d71 = () => interopDefault(import('..\\pages\\tools\\index.vue' /* webpackChunkName: "pages/tools/index" */))
const _77eb2038 = () => interopDefault(import('..\\pages\\wallpicture\\index.vue' /* webpackChunkName: "pages/wallpicture/index" */))
const _30157295 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _68625dc2 = () => interopDefault(import('..\\pages\\friends\\_id.vue' /* webpackChunkName: "pages/friends/_id" */))
const _3ab78c1e = () => interopDefault(import('..\\pages\\note\\_id.vue' /* webpackChunkName: "pages/note/_id" */))
const _0eb04d66 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _18219572 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _088d2819 = () => interopDefault(import('..\\pages\\tools\\_id.vue' /* webpackChunkName: "pages/tools/_id" */))
const _34985ec0 = () => interopDefault(import('..\\pages\\wallpicture\\_id.vue' /* webpackChunkName: "pages/wallpicture/_id" */))
const _07418168 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/course",
    component: _9f27ce26,
    name: "course"
  }, {
    path: "/friends",
    component: _4347fcf7,
    name: "friends"
  }, {
    path: "/login",
    component: _5e2db702,
    name: "login"
  }, {
    path: "/note",
    component: _ca241794,
    name: "note"
  }, {
    path: "/register",
    component: _2d41a006,
    name: "register"
  }, {
    path: "/teacher",
    component: _740a0eec,
    name: "teacher"
  }, {
    path: "/tools",
    component: _49cc7d71,
    name: "tools"
  }, {
    path: "/wallpicture",
    component: _77eb2038,
    name: "wallpicture"
  }, {
    path: "/course/:id",
    component: _30157295,
    name: "course-id"
  }, {
    path: "/friends/:id",
    component: _68625dc2,
    name: "friends-id"
  }, {
    path: "/note/:id",
    component: _3ab78c1e,
    name: "note-id"
  }, {
    path: "/player/:vid?",
    component: _0eb04d66,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _18219572,
    name: "teacher-id"
  }, {
    path: "/tools/:id",
    component: _088d2819,
    name: "tools-id"
  }, {
    path: "/wallpicture/:id",
    component: _34985ec0,
    name: "wallpicture-id"
  }, {
    path: "/",
    component: _07418168,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
