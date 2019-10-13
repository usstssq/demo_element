import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

var componentlist = [
    {
        path: '/test-index',
        name: '演示页面',
        component: resolve => require(['/Users/sushuqing/code/learn/element-starter-master/src/components/common/test.vue'], resolve),
    }]

const router = window.$router = new Router({
    componentlist
});

export default router;
