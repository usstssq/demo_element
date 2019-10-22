<template>
    <div>
        <v-header></v-header>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-divider></el-divider>
                    <productIndustry></productIndustry>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    工程设备机械
                    <div>
                        <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                        <el-divider></el-divider>
                        <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    </div>
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
    </div>
</template>

<script>
    import Vue from 'vue';
    import vHeader from '~/components/common/header.vue'
    import productIndustry from '~/components/common/product_industry.vue'
    import { Container, Main, Row, Col, } from 'element-ui';
    import { getGoods } from '~/api/index.js'
    
    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader,
            productIndustry
        },
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        created() {
            this._getSeller()
        },
        methods: {
            _getSeller() {
                getGoods({
                    id: this.seller.id
                }).then((goods) => {
                    this.goods = goods
                })
            }
        }
    }

    // import 'element-ui/lib/theme-chalk/index.css';
    // import App from '/Users/sushuqing/code/learn/element-starter-master/src/App.vue';

    // Vue.use(ElementUI);

    // new Vue({
    //   el: '#app',
    //   render: h => h(App)
    // });
</script>








