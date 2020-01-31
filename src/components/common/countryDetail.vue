<template>
    <div>
        <v-header></v-header>
        <div id="htmlBody">
            <el-row>
                <el-col :span="16">
                    <countryIntro :title="countryin_info_title" :countryInfoContent="country_info_content"></countryIntro>
                </el-col>
                <el-col :span="8">
                    <companyIntro :companyName="company_name" :companyInfoContent="company_info_content"></companyIntro>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="manufacture_list" :comTitle="product_industry_title" :linkInfo="product_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="equipment_list" :comTitle="eng_equipment_title" :linkInfo="eng_equipment_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="manufacture_list" :comTitle="overseas_companies_title" :linkInfo="list_overseas_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="manufacture_list" :comTitle="local_companies_title" :linkInfo="list_local_company_link_info"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <secondHandResource v-if="second_hand_resource_content.length > 1" :comTitle="second_hand_resource_title" :secondHandResourceContent="second_hand_resource_content" :linkInfo="second_hand_resource_link_info"></secondHandResource>
                </el-col>
                <el-col :span="6">
                    <recruInfo :comTitle="recruitment_title" :linkInfo="recruitment_info" :recruInfoArr="recru_info_arr"></recruInfo>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
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
    import companyIntro from '~/components/company_info/company_intro.vue'
    import recruInfo from '~/components/recru_info/recru_info.vue'
    import secondHandResource from '~/components/second_hand_resource/second_hand_resource.vue'
    import africaMap from '~/components/africa_map/africa_map.vue'
    import news from '~/components/news/news.vue'
    import { Container, Main, Row, Col, } from 'element-ui'
    import { getProdList,getProdVipPanel,getCountryInfo,getSenHadRes,getNews,getProducIndustry,getCompanyInfo,getEquipList,getrecruInfo } from '~/api/index.js'
    import { get,post } from '~/api/helpers.js'
    
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
            news,
            companyIntro,
            recruInfo
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
                overseas_companies_title:"驻外公司名单",
                list_overseas_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                local_companies_title:"本地公司名单",
                list_local_company_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                countryin_info_title:"",
                company_name:"百度",
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
                recruitment_title:"招聘信息",
                news_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"
                },
                news_arr:[{
                    "index":1,
                    "content":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                    "update_time":"2018-04-26"
                }],
                recruitment_info:{
                    "link_content":"更多",
                    "link_href":"/recruitment_info/more"                    
                },
                recru_info_arr:[{
                    "id":1,
                    "title":"招聘标题",
                    "mDate":"20200201121314"
                }],
                manufacture_list:{
                    "general":[
                        {
                            "company_name":"XXX厂创",
                            "url_address":"http://www.baidu.com",
                            "icon_address":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
                        }
                    ],
                    "vip":[
                        {
                            "company_name":"XXX厂创",
                            "url_address":"http://www.baidu.com",
                            "vip_icon_address":"https://b3.hoopchina.com.cn/images/logo2017/v1/hp_logo_sports.png",
                            "com_tel":"18818262629"
                        }
                    ]
                },
                equipment_list:{
                    "general":[
                        {
                            "company_name":"XXX厂创",
                            "url_address":"http://www.baidu.com",
                            "icon_address":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
                        }
                    ],
                    "vip":[]
                },
                company_info_content:{
                    content:"百度是一家好公司！",
                    phone:"18818262629"
                }
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
            this._getCountryInfo(),
            this._getProductIndustry(),
            this._getSecondHandResource(),
            this._getNews(),
            this._getProdList(),
            this._getProdVipPanel(),
            this._getEquipmentList(),
            this._getCompanyInfo(),
            this._getRecruInfo()
        },
        methods: {
            _getProdList(){
                let params = {
                    "top_n":10
                },
                url = "api/main_content/1/get_prod_list";
                getProdList(url,params).then((prodlist)=>{
                    this.manufacture_list.general = prodlist;
                    // window.prodlist = prodlist;
                    // console.log(prodlist);
                })
            },
            _getProdVipPanel(){
                let params = {
                    "top_n":10
                },
                url = "api/main_content/1/get_prod_vip_panel";
                getProdVipPanel(url,params).then((prodlist)=>{
                    this.manufacture_list.vip = prodlist;
                    // window.prodlist = prodlist;
                    // console.log(prodlist);
                })                
            },
            _getEquipmentList(){
                let params = {
                    "top_n":10
                },
                url = "trade/main_content/1/get_equip_list"
                getEquipList(url,params).then((equiplist)=>{
                    // this.equipment_list.vip = equiplist;
                    // 工程设备机械目前后台没有vip的接口，前端先不显示vip接口
                    this.equipment_list.general = equiplist;
                })
            },
            _getCountryInfo() {
                let url = "api/main_content/1/get_country_info"
                getCountryInfo(url).then((countryInfo) => {
                    this.country_info_content = countryInfo.introInfo,
                    this.countryin_info_title = countryInfo.nameCh
                    // this.country_info_content = countryInfo.country_info_content,
                    // this.countryin_info_title = countryInfo.title
                })
            },
            _getSecondHandResource() {
                let url = "api/second_hand_resource"
                getSenHadRes(url).then((secondHadResourceInfo) => {
                    this.second_hand_resource_title = secondHadResourceInfo.title,
                    this.second_hand_resource_content = secondHadResourceInfo.second_hand_resource_content
                })
            },
            _getNews(){
                let url = "api/news"
                getNews(url).then((news)=>{
                    this.news_title = news.news_title,
                    this.news_arr = news.news_content
                })
            },
            _getRecruInfo(){
                let url = "api/main_content/1/recruitment_info";
                this.recruitment_info.link_href = "/recruitment_info/more/1"
                getrecruInfo(url,{"token":window.localStorage.token}).then((recruInfo)=>{
                    this.recru_info_arr = recruInfo
                })
            },
            _getProductIndustry() {
                let url = "api/product_industry"
                getProducIndustry(url).then((productIndustry) => {
                    // this.manufacture_list = productIndustry.manufacture_list
                })
            },
            _getCompanyInfo(){
                let url = "api/company_info"
                getCompanyInfo(url).then((company_info)=>{
                    console.log(JSON.stringify(company_info))
                    this.company_name = company_info.company_name,
                    this.company_info_content = company_info.company_info_content
                })
            }
        },
    }

</script>

<style>
    body {
        /*font-family: "Helvetica Neue", Helvetica, sans-serif;*/
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 14px;
        color: #333;
    }
    #htmlBody{
        min-width:576px;
        margin:0 80px;
    }
</style>






