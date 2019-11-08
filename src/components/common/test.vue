<template>
    <div>
        <v-header></v-header>
        <div id="htmlBody">
            <el-row>
                <el-col :span="24">
                    <countryIntro :title="countryin_info_title" :countryInfoContent="country_info_content"></countryIntro>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <el-divider></el-divider>
                        <productIndustry :title="product_industry_title"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <el-divider></el-divider>
                        <productIndustry :title="eng_equipment_title"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <el-divider></el-divider>
                        <productIndustry :title="list_overseas_companies"></productIndustry>
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
    </div>
</template>

<script>
    import Vue from 'vue';
    import vHeader from '~/components/common/header.vue'
    import productIndustry from '~/components/product_industry/product_industry.vue'
    import countryIntro from '~/components/country_intro/country_intro.vue'
    import { Container, Main, Row, Col, } from 'element-ui'
    import { getCountryInfo } from '~/api/index.js'
    
    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader,
            productIndustry,
            countryIntro
        },
        data(){
            return {
                product_industry_title:"生产制造业",
                eng_equipment_title:"工程设备机械",
                list_overseas_companies:"驻外公司名单",
                countryin_info_title:"",
                country_info_content:""
            }
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
            this._getProductIndustry()
        },
        methods: {
            _getProductIndustry() {
                getCountryInfo().then((countryInfo) => {
                    this.country_info_content = countryInfo.country_info_content,
                    this.countryin_info_title = countryInfo.title
                })
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

<style>
    #htmlBody{
        width:1040px;
        margin:0 auto;
    }
</style>






