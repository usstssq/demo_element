import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

var componentlist = [
    {
        path: '/test-index',
        name: '演示页面',
        component: resolve => require(['~/components/common/test.vue'], resolve),
    }]

const router = window.$router = new Router({
    componentlist
});

export default router;
