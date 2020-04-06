<template>
    <div class="company_intro">
        <h3 class="header_company_style">
            {{companyName}}
        </h3>
        <div class="company_content">
            <el-row>
                <el-col>
                    <span>{{companyInfoContent.content}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    联系电话：{{companyInfoContent.phone}}
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <router-link to="/uploadData" class="past_information">发布信息</router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import 'element-ui/lib/theme-chalk/index.css'

    export default {
        name: 'companyIntro',
        props: {
            companyName: {
                type: String,
                default(){
                    return ""
                }
            },
            companyInfoContent: {
                type: Object,
                default(){
                    return {
                        content:"",
                        phone:""
                    }
                }
            }
        }
    }
</script>

<style>
    .company_intro {
        margin: 40px 0 0 0;
        width: 100%;
        text-align: center;
        background-color: #F8F8F8;
    }
    .header_company_style{
        text-align:left;
        margin:0;
        background-color: #E6EFFE;
        padding: 10px 0 10px 5px;
    }
    .company_content{
        text-align: left;
        font-size: 13px;
        padding:15px 15px;
    }
    .past_information{
        text-decoration:none;
        color:red;
    }
</style>



