// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const list = document.querySelectorAll('.list')
function activeLink () {
  list.forEach((item) =>
    item.classList.remove('active'))
  this.classList.add('active')
}
list.forEach((item) =>
  item.addEventListener('click', activeLink))
