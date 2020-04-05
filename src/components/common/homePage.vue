<template>
    <div>
        <v-header></v-header>
        <div id="homeHtmlBody">
            <el-row>
                <el-col :span="10">
                    <h1>{{company_info_title}}</h1>
                    <div>{{company_info_content}}</div>
                </el-col>
                <el-col :span="14">
                    <africaMap></africaMap>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import vHeader from '~/components/common/header.vue'
    import africaMap from '~/components/africa_map/africa_map.vue'
    import { Row, Col, } from 'element-ui'
    import { getCompanyInfo } from '~/api/index.js'
    
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader,
            africaMap
        },
        data(){
            return {
                company_info_title:"双禾盛非洲信息共享平台",
                company_info_content:"双禾盛中介代理资源公司立足非洲，手机本地国家各种商业化信息和各种二手交易资源，为在非洲国家发展的中资企业提供全方位的市场信息及商业资源服务，在专业领域内寻求合作共赢。"
            }
        }
        // created() {
            // this._getCompanyInfo()
        // },
        // methods: {
        //     _getCompanyInfo() {
        //         let url = "api/company_info"
        //         getCompanyInfo(url).then((countryInfo) => {
        //             this.company_info_title = countryInfo.company_name,
        //             this.company_info_content = countryInfo.company_info_content.content
        //         })
        //     }
        // },
    }

</script>

<style>
    #homeHtmlBody{
        min-width:576px;
        margin:40px 80px;
    }
</style>






