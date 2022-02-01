import Vue from 'vue'
import App from './App.vue'
import htmlPage from './pages/HTML.vue'
import cssPage from './pages/CSS.vue'
import javascriptPage from './pages/JavaScript.vue'
import laravelPage from './pages/Laravel.vue'
import vuePage from './pages/Vue.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/HTML', component: htmlPage },
    { path: '/CSS', component: cssPage },
    { path: '/JavaScript', component: javascriptPage },
    { path: '/Laravel', component: laravelPage },
    { path: '/Vue', component: vuePage },
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')