import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from '@/store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faThumbsDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbsUp, faThumbsDown, faExternalLinkAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)//global registration

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
