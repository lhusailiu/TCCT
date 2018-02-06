import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import router from './router'
import store from './store/index'
import AMap from 'vue-amap'
import echarts from 'echarts'
import * as THREE from 'three'

Vue.config.productionTip = false

Vue.use(AMap)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(THREE)

Vue.prototype.$echarts = echarts
Vue.prototype.$ = jquery
// Vue.prototype.$map = AMap

AMap.initAMapApiLoader({
  key: '7e819a47f555836d52d0733c727bcc84',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.PlaceSearch']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
