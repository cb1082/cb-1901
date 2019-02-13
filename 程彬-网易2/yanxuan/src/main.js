import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible"
import center from "./tools/center";

Vue.prototype.$center=center;

import tools from "./tools";
Vue.use(tools);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
