import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login  from '../components/Login.vue'
import Home  from '../components/Home.vue'
import Signup  from '../components/Signup.vue'
import Recharge  from '../components/Recharge.vue'
import Logout  from '../components/Logout.vue'
import Payment  from '../components/Payment.vue'
import Balance  from '../components/Balance.vue'
import ConfirmPayment  from '../components/ConfirmPayment.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/signup', component: Signup },
    { path: '/recharge', component: Recharge },
    { path: '/logout', component: Logout },
    { path: '/payment', component: Payment },
    { path: '/confirmPayment', component: ConfirmPayment },
    { path: '/balance', component: Balance },
]


const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router