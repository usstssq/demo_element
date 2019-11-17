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
                        <productIndustry :comTitle="product_industry_title" :linkInfo="product_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :comTitle="eng_equipment_title" :linkInfo="eng_equipment_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <el-divider></el-divider>
                        <productIndustry :comTitle="list_overseas_companies" :linkInfo="list_overseas_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <secondHandResource :comTitle = "second_hand_resource_title" :secondHandResourceContent = "second_hand_resource_content" :linkInfo="second_hand_resource_link_info"></secondHandResource>
                </el-col>
                <el-col :span="6">
                    <news :comTitle="news_title" :linkInfo="news_link_info" :newsArr="news_arr"></news>
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
    import secondHandResource from '~/components/second_hand_resource/second_hand_resource.vue'
    import africaMap from '~/components/africa_map/africa_map.vue'
    import news from '~/components/news/news.vue'
    import { Container, Main, Row, Col, } from 'element-ui'
    import { getCountryInfo,getSenHadRes,getNews } from '~/api/index.js'
    
    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader,
            productIndustry,
            countryIntro,
            secondHandResource,
            africaMap,
            news
        },
        data(){
            return {
                product_industry_title:"生产制造业",
                product_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                eng_equipment_title:"工程设备机械",
                eng_equipment_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                list_overseas_companies:"驻外公司名单",
                list_overseas_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                countryin_info_title:"",
                country_info_content:"",
                second_hand_resource_title:"",
                second_hand_resource_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"                    
                },
                second_hand_resource_content:[{
                    "index":1,
                    "type":"求购",
                    "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                    "num":1,
                    "tel":13000000001
                }],
                news_title:"",
                news_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                news_arr:[{
                    "index":1,
                    "content":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                    "update_time":"2018-04-26"
                }]
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
            this._getProductIndustry(),
            this._getSecondHandResource(),
            this._getNews()
        },
        methods: {
            _getProductIndustry() {
                getCountryInfo().then((countryInfo) => {
                    this.country_info_content = countryInfo.country_info_content,
                    this.countryin_info_title = countryInfo.title
                })
            },
            _getSecondHandResource() {
                getSenHadRes().then((secondHadResourceInfo) => {
                    this.second_hand_resource_title = secondHadResourceInfo.title,
                    this.second_hand_resource_content = secondHadResourceInfo.second_hand_resource_content
                })
            },
            _getNews(){
                getNews().then((news)=>{
                    this.news_title = news.news_title,
                    this.news_arr = news.news_content
                })
            }
        },
    }

</script>

<style>
    #htmlBody{
        min-width:576px;
        margin:0 80px;
    }
</style>






