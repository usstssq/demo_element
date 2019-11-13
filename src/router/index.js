import Vue from 'vue'
import Router from 'vue-router'

import countryDetail from "~/components/common/countryDetail.vue"
import homePage from "~/components/common/homePage.vue"

Vue.use(Router);

const routes = [
    {
        path: '/countryDetail',
        component: countryDetail
    },{
        path: '/homePage',
        name: '首页',
        component: homePage
    },{
        path:'/',
        redirect:'/homePage'
    }
    ]

const router = window.$router = new Router({
    routes
});

export default router;
