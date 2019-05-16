// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from "vue-router"
import axios from 'axios'
import Routes from "./router/routes"

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.directive("rain",{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8)
  }
})
Vue.directive("live",{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
      el.style.maxwidth="1260px";
    }else if(binding.value=="narrow"){
      el.style.maxwidth="560px";
    }
    if(binding.arg=="column"){
      el.style.margin="20px";
      
    } 
  }
})
Vue.filter("toUp",function(value){
    return value.toUpperCase();
})
Vue.filter("sin",function(value){
    return value.slice(0,100)+"..."
})

const router= new VueRouter({
    mode:'history',
    routes:Routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'

})
