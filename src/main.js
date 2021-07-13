import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import VShowSlide from 'v-show-slide'
import VueClipboard from 'vue-clipboard2'

import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VShowSlide)

new Vue({
  head: {
    title: {
      inner: 'Freyala'
    }
  },
  render: h => h(App),
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
