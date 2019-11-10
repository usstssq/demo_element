<template>
    <el-container>
        <el-header>
            <span style="font-size:1.5em">双禾盛中介代理资源平台</span>
            <div style="float:right">
                <span>
                    <i class="el-icon-user-solid"></i>
                    苏树清
                </span>
            </div>
        </el-header>
    </el-container>
</template>

<script>
    import Vue from 'vue';
    import { Container, Main, Row, Col, Icon } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Icon);

    export default {
        name: 'vHeader',
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
<style>
    .el-header, 
    .el-footer {
        background-color: #5284E6;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
</style>


