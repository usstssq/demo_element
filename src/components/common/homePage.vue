<template>
    <div>
        <v-header></v-header>
        <div id="homeHtmlBody">
            <el-row>
                <el-col :span="10">
                    <comIntroduce :title="company_info_title" :content="company_info_content"></comIntroduce>
                    <comIntroduce :title="company_info_title" :content="company_info_content"></comIntroduce>
                    <comIntroduce :title="company_info_title" :content="company_info_content"></comIntroduce>
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
    import comIntroduce from '~/components/introduce/introduce.vue'
    import africaMap from '~/components/africa_map/africa_map.vue'
    import { Row, Col, } from 'element-ui'
    import { getCompanyInfo } from '~/api/index.js'
    
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'v-test',
        components: {
            vHeader,
            comIntroduce,
            africaMap
        },
        data(){
            return {
                company_info_title:"公司简介的title",
                company_info_content:"公司简介的内容"
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
            this._getCompanyInfo()
        },
        methods: {
            _getCompanyInfo() {
                let url = "api/company_info"
                getCompanyInfo(url).then((countryInfo) => {
                    this.company_info_title = countryInfo.company_name,
                    this.company_info_content = countryInfo.company_info_content.content
                })
            }
        },
    }

</script>

<style>
    #homeHtmlBody{
        min-width:576px;
        margin:40px 80px;
    }
</style>






