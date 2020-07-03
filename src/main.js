import Vue from 'vue'
import App from './App.vue'

// Buefy
// https://buefy.org/documentation/
import './plugins/buefy'

// Vue i18n
// https://kazupon.github.io/vue-i18n/
import i18n from './plugins/i18n'

// Vue common settings
Vue.config.productionTip = false

// Vue init
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
