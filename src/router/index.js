import Vue from 'vue'
import Router from 'vue-router'

import countryDetail from "~/components/common/countryDetail.vue"
import homePage from "~/components/common/homePage.vue"
import companyDetail from "~/components/company_detail/company_detail.vue"
import uploadData from "~/components/upload_data/upload_data.vue"
import recruInfoMore from "~/components/recru_info/more.vue"
import recruInfoDetail from "~/components/recru_info/recru_info_detail.vue"

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
        path: '/uploadData',
        component: uploadData
    },{
        path:'/companyDetail/:companyid',
        component: companyDetail
    },{
        path:'/recru_info/:recru_info_id',
        component: recruInfoDetail
    },{
        path:'/recruitment_info/more/:country_id',
        component: recruInfoMore
    },{
        path:'/',
        redirect:'/homePage'
    }
]

const router = window.$router = new Router({
    mode:'history',
    routes:routes
});

export default router;
