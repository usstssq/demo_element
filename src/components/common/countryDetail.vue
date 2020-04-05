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
                <!-- 生产制造类企业 -->
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="manufacture_list" :comTitle="product_industry_title" :linkInfo="product_link_info" :prod_type="prod_vip_panel"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 工程设备机械 -->
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="equipment_list" :comTitle="eng_equipment_title" :linkInfo="eng_equipment_link_info" :prod_type="equip_vip_panel"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 驻外公司名单 -->
                <el-col :span="24">
                    <div class="grid-content">
                        <productIndustry :data_list="oversea_list" :comTitle="overseas_companies_title" :linkInfo="list_overseas_link_info" :prod_type="oversea_vip_panel"></productIndustry>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 本地公司名单 -->
                <el-col :span="24">
                    <div class="grid-content">
                        <!-- <productIndustry :data_list="manufacture_list" :comTitle="local_companies_title" :linkInfo="list_local_company_link_info"></productIndustry> -->
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <!-- 二手设备信息 -->
                <el-col :span="18">
                    <secondHandResource v-if="second_hand_item_list.length > 1" :secondHandItemList="second_hand_item_list" comTitle="二手资源交易信息"></secondHandResource>
                </el-col>
                <!-- 招聘信息 -->
                <el-col :span="6">
                    <recruInfo :comTitle="recruitment_title" :linkInfo="recruitment_info" :recruInfoArr="recru_info_arr"></recruInfo>
                </el-col>
            </el-row>
            <el-row>
                <!-- 新闻 -->
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
    import { getProdList,getExchangeEquip,getProdVipPanel,getOverSeaList,getCountryInfo,getNews,getProducIndustry,getCompanyInfo,getEquipList,getrecruInfo } from '~/api/index.js'
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
                equip_vip_panel:"equip_vip_panel",
                prod_vip_panel:"prod_vip_panel",
                oversea_vip_panel:"oversea_vip_panel",
                countryId:1,
                second_hand_item_list:[
                    {
                            "id": 6,
                            "name": "2手挖掘机",
                            "count": 1,
                            "contactorPhone": "13100010002",
                            "exchangeType": 1,
                            "state": 1,
                            "rankOrder": 9999,
                            "countryId": 1,
                            "modifyDate": "20191229014256",
                            "picId": null,
                            "picInfoList": [
                                {
                                    "id": 1,
                                    "countryId": null,
                                    "equipId": 6,
                                    "path": "static/equip_img/small-icon_1.jpeg",
                                    "state": 1,
                                    "modifyDate": null,
                                    "imgSize": null,
                                    "imgContent": null
                                }
                            ]
                        }],
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
                company_name:"双禾盛非洲信息共享平台",
                country_info_content:"",
                second_hand_resource_link_info:{
                    "link_content":"更多",
                    "link_href":"https://www.hupu.com/"                    
                },
                news_title:"新闻公告",
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
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ],
                    "vip":[
                        {
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ]
                },
                equipment_list:{
                    "general":[
                        {
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ],
                    "vip":[
                        {
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ]
                },
                oversea_list:{
                    "general":[
                        {
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ],
                    "vip":[
                        {
                            "imageId": null,
                            "common": {
                                "companyId": 1,
                                "fullName": "小米科技有限公司",
                                "shortName": "小米科技",
                                "founder": "雷军",
                                "belongIndustryType": "手机",
                                "certification": "ISO90001",
                                "modifyDate": "2020-03-02T14:14:49.000+0000",
                                "state": 1,
                                "mainBusinessDesc": "手机;智能电子产品"
                            },
                            "onsite": {
                                "countryId": 1,
                                "companyId": 1,
                                "onsiteAddress": "望京东路1号20层",
                                "onsiteContactPhone": "010-00210001",
                                "onsiteContactPeople": "13010001000",
                                "state": 1
                            }
                        }
                    ]
                },
                company_info_content:{
                    content:"双禾盛阿尔及利亚站负责人，付永强",
                    phone:"0774477777"
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
            this.countryId = localStorage.getItem("countryId"),
            this._getCountryInfo(),
            this._getExchangeEquip(),
            this._getNews(),
            this._getProdList(),
            this._getProdVipPanel(),
            this._getEquipmentList(),
            this._getEquipmentVipList(),
            // this._getCompanyInfo(),
            this._getOverSeaList(),
            this._getRecruInfo(),
            this._getOverSeaVipList()
            console.log(`countryId:${this.countryId}`)
        },
        methods: {
            _getProdList(){
                let params = {
                    "top_n":10
                },
                url = `trade/main_content/${this.countryId}/get_prod_panel`;
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
                url = `trade/main_content/${this.countryId}/get_prod_vip_panel`;
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
                url = `trade/main_content/${this.countryId}/get_equip_panel`
                getEquipList(url,params).then((equiplist)=>{
                    // this.equipment_list.vip = equiplist;
                    // 工程设备机械目前后台没有vip的接口，前端先不显示vip接口
                    this.equipment_list.general = equiplist;
                })
            },
            _getEquipmentVipList(){
                let params = {
                    "top_n":10
                },
                url = `trade/main_content/${this.countryId}/get_equip_vip_panel`
                getEquipList(url,params).then((equiplist)=>{
                    // this.equipment_list.vip = equiplist;
                    // 工程设备机械目前后台没有vip的接口，前端先不显示vip接口
                    this.equipment_list.vip = equiplist;
                })
            },
            _getOverSeaList(){
                let params = {
                    "top_n":10
                },
                url = `trade/main_content/${this.countryId}/get_oversea_panel`
                getOverSeaList(url,params).then((oversealist)=>{
                    // this.equipment_list.vip = equiplist;
                    // 工程设备机械目前后台没有vip的接口，前端先不显示vip接口
                    this.oversea_list.general = oversealist;
                })
            },
            _getOverSeaVipList(){
                let params = {
                    "top_n":10
                },
                url = `trade/main_content/${this.countryId}/get_oversea_vip_panel`
                getOverSeaList(url,params).then((equiplist)=>{
                    // this.equipment_list.vip = equiplist;
                    // 工程设备机械目前后台没有vip的接口，前端先不显示vip接口
                    this.oversea_list.vip = equiplist;
                })
            },
            _getCountryInfo() {
                let url = `trade/main_content/${this.countryId}/get_country_info`
                getCountryInfo(url).then((countryInfo) => {
                    this.country_info_content = countryInfo.introInfo,
                    this.countryin_info_title = countryInfo.nameCh
                    // this.country_info_content = countryInfo.country_info_content,
                    // this.countryin_info_title = countryInfo.title
                })
            },
            _getExchangeEquip() {
                let url = `trade/main_content/${this.countryId}/get_exchange_equip_full_info`
                // let url = `trade/main_content/1/get_exchange_equip_full_info`
                getExchangeEquip(url).then((exchangeEquipInfo) => {
                    this.second_hand_item_list = exchangeEquipInfo
                })
            },
            _getNews(){
                let url = `trade/main_content/${this.countryId}/get_news`
                getNews(url).then((news)=>{
                    // this.news_title = news.news_title,
                    this.news_arr = news
                })
            },
            _getRecruInfo(){
                let url = `trade/main_content/${this.countryId}/recruitment_info`;
                // let url = `trade/main_content/1/recruitment_info`;
                this.recruitment_info.link_href = "/recruitment_info/more/1"
                getrecruInfo(url,{"token":window.localStorage.token}).then((recruInfo)=>{
                    this.recru_info_arr = recruInfo
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






