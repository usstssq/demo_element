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
                    {{company_info}}
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
                company_info:"",
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
                url = `api/main_content/${this.$route.params.companyid}/get_company_detail`;
                getCompanyDetail(url).then((companyDetail)=>{
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
</style>






