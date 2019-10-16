<template>
    <div>
        <v-header></v-header>
        <el-container>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                                生产制造业
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                                工程设备机械
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                                服务网点
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                国家滚动交易二手资源信息
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                国家实时新闻-商业新闻
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <div v-if="seller.content">
                                {{seller.content}}
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue';
    import vHeader from '~/components/common/header.vue'
    import { Container, Main, Row, Col, } from 'element-ui';
    
    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader
        },
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }

    // import 'element-ui/lib/theme-chalk/index.css';
    // import App from '/Users/sushuqing/code/learn/element-starter-master/src/App.vue';

    // Vue.use(ElementUI);

    // new Vue({
    //   el: '#app',
    //   render: h => h(App)
    // });
</script>








