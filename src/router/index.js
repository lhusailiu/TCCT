import Vue from 'vue'
import Router from 'vue-router'
const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const registry = r => require.ensure([], () => r(require('@/page/registry')), 'registry')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const foundPass = r => require.ensure([], () => r(require('@/page/foundPass')), 'foundPass')
const comment = r => require.ensure([], () => r(require('@/page/comment')), 'comment')
const textEdit = r => require.ensure([], () => r(require('@/page/textEdit')), 'textEdit')
const tableEdit = r => require.ensure([], () => r(require('@/page/tableEdit')), 'tableEdit')
const lianxiren = r => require.ensure([], () => r(require('@/page/lianxiren')), 'lianxiren')
const yunfile = r => require.ensure([], () => r(require('@/page/yunfile')), 'yunfile')
const news = r => require.ensure([], () => r(require('@/page/news')), 'news')
const addFriends = r => require.ensure([], () => r(require('@/components/commentInfo/addFriends')), 'addFriends')
const setsModal = r => require.ensure([], () => r(require('@/page/setsModal')), 'setsModal')
const editZiliao = r => require.ensure([], () => r(require('@/page/editZiliao')), 'editZiliao')
const mainList = r => require.ensure([], () => r(require('@/page/mainList')), 'mainList')
const echarts = r => require.ensure([], () => r(require('@/page/echarts')), 'echarts')
const setAddFriend = r => require.ensure([], () => r(require('@/page/setAddFriend')), 'setAddFriend')
// const chuangkou = r => require.ensure([], () => r(require('@/components/chuangkou')), 'chuangkou')
// const editZiliao = r => require.ensure([], () => r(require('@/common/service-modal/editZiliao')), 'editZiliao')

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: '',
          component: comment,
          name: 'comment'
        },
        {
          path: '/yunfile',
          name: 'yunfile',
          component: yunfile
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path: '/lianxiren',
          name: 'lianxiren',
          component: lianxiren
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: echarts
        },
        {
          path: '/setsModal',
          name: 'setsModal',
          component: setsModal
        },
        {
          path: '/textEdit',
          name: 'textEdit',
          component: textEdit
        },
        {
          path: '/addFriends',
          name: 'addFriends',
          component: addFriends
        },
        {
          path: '/tableEdit',
          name: 'tableEdit',
          component: tableEdit
        },
        {
          path: '/mainList',
          name: 'mainList',
          component: mainList
        },
        {
          path: '/setAddFriend',
          name: 'setAddFriend',
          component: setAddFriend
        },
        {
          path: '/editZiliao/:userPicItems/:userPicItemName/:userId',
          name: 'editZiliao',
          component: editZiliao
        }
      ]
    },
    {
      path: '/registry',
      name: 'registry',
      component: registry
    },
    {
      path: '/foundPass',
      name: 'foundPass',
      component: foundPass
    }
  ]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
