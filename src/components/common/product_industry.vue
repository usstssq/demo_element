<template>
    <div>
        <span> 生产制造业 </span>
        <el-link href="https://element.eleme.io" target="_blank" type="primary">雨纷纷</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link href="https://element.eleme.io" target="_blank" type="primary">旧故里</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link href="https://element.eleme.io" target="_blank" type="primary">草木深</el-link>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'product_industry1',
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>





