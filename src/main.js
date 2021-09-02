import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// import Axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$http = Axios
// Axios.defaults.baseURL = 'http://127.0.1.1:3333'
// vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
