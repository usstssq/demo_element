<template>
    <div>
        <v-header></v-header>
        <div id="htmlBody">
            <el-row>
                <el-col>
                    <h1 style="text-align: center">{{company_name}}</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <h3 style="text-align: left">企业简介</h3>
                    {{company_info.intrdct}}
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <h3 style="text-align: left">相关信息</h3>
                </el-col>
            </el-row>
            <div class="company_info">
                <el-row>
                    <el-col :span="2">
                        公司名称
                    </el-col>
                    <el-col :span="6">
                        {{company_info.name}}
                    </el-col>
                    <el-col :span="2">
                        创始人
                    </el-col>
                    <el-col :span="6">
                        {{company_info.create_person}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="2">
                        所属行业
                    </el-col>
                    <el-col :span="6">
                        {{company_info.belong_industry}}
                    </el-col>
                    <el-col :span="2">
                        经营范围
                    </el-col>
                    <el-col :span="6">
                        {{company_info.business_scope}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="2">
                        联系方式
                    </el-col>
                    <el-col :span="6">
                        {{company_info.contact_information}}
                    </el-col>
                    <el-col :span="2">
                        经营范围
                    </el-col>
                    <el-col :span="6">
                        {{company_info.business_scope}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="2">
                        总部地址
                    </el-col>
                    <el-col :span="6">
                        {{company_info.address}}
                    </el-col>
                    <el-col :span="2">
                        资质认证
                    </el-col>
                    <el-col :span="6">
                        {{company_info.qualification_certification}}
                    </el-col>
                </el-row>
            </div>
            <el-row>
                <el-col>
                    <h3 style="text-align: left">主营业务</h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    {{company_info.main_business_introduction}}
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Row, Col, } from 'element-ui'
    import vHeader from '~/components/common/header.vue'
    import { getCompanyDetail } from '~/api/index.js'

    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'company_detail',
        components: {
            vHeader
        },
        data(){
            return {
                company_info:Object,
                company_name:""
            }
        },
        created() {
            this._getCompanyDetail()
        },
        methods: {
            _getCompanyDetail(){
                let params = {
                    "top_n":10
                },
                url = `trade/main_content/${this.$route.params.companyid}/get_company_info`;
                getCompanyDetail(url,params).then((companyDetail)=>{
                    this.company_name = companyDetail.company_name
                    this.company_info = companyDetail.company_info
                })
            }
        }
    }

</script>

<style>
    #htmlBody{
        min-width:576px;
        margin:0 80px;
    }
    .company_info .el-row{
        margin-bottom: 10px;
    }
</style>






