<template>
    <div class="product_industry">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <div class="product_industry_content">
            <el-row>
                <el-col v-for="(factory,index) in data_list.general" :span="4">
                    <el-link class="imgscale-top" :underline="false" :href="'/companyDetail/'+factory.l_rank" target="_blank" type="primary">
                        <img :src="'/'+factory.l_rank" width="16" height="16" class="nav-icon"></img>
                        {{factory.name}}
                    </el-link>
                </el-col>
            </el-row>
            <el-row>
                <el-col class = "vip" v-for="(factory,index) in data_list.vip" :span="4">
                    <div class="vip_content imgscale-top boxshodow-hover">
                        <a :underline="false" :href="factory.v_page_url" target="_blank" type="primary">
                            <div class="img_box">
                                <div class="imgscale">
                                    <img :src="factory.v_img_url" :alt="factory.company_name">
                                </div>
                            </div>
                            <div class="title_box">
                                <div class="title ellipsis-2">
                                    {{factory.name}}
                                </div>
                            </div>
                            <div class="com_tel">
                                <div class="ellipsis-2">
                                    发财热线: {{factory.state}}
                                </div>
                            </div>
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider, Row, Col, } from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css';
    import comTitle from '~/components/common/comTitle.vue'
    // import { getProducIndustry } from '~/api/index.js'

    Vue.use(Divider);
    export default {
        name: 'productIndustry',
        components: {
            comTitle
        },
        props: {
            comTitle: {
                type: String,
                default(){
                    return ""
                }
            },
            linkInfo:{
                type:Object,
                default(){
                    return {
                        "link_content":"更多",
                        "link_href":"http://www.bing.com"
                    }
                }
            },
            data_list:{
                type:Object,
                default(){
                    return {
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
                    }
                }
            }
        }
        // created() {
            // this._getProductIndustry()
        // },
        // methods: {
            // _getProductIndustry() {
            //     getProducIndustry().then((productIndustry) => {
            //         this.manufacture_list = productIndustry.manufacture_list
            //     })
            // }
        // },
        // data(){
            // return{
            //     manufacture_list:{
            //         "general":[
            //             {
            //                 "company_name":"XXX厂创",
            //                 "url_address":"http://www.baidu.com",
            //                 "icon_address":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
            //             }
            //         ],
            //         "vip":[
            //             {
            //                 "company_name":"XXX厂创",
            //                 "url_address":"http://www.baidu.com",
            //                 "vip_icon_address":"https://b3.hoopchina.com.cn/images/logo2017/v1/hp_logo_sports.png",
            //                 "com_tel":"18818262629"
            //             }
            //         ]
            //     },
            //     com_title:""
            // };
        // }
    }
</script>

<style>
    .com_title{
        background-color:#F8F8F8;
        padding:15px 0 15px 0;
    }
    .com_title h3{
        margin:0 0;
        padding-left:5px;
    }
    a:hover{
        background : #eee
    }
    .el-link--inner{
        display:inline-block;
        padding: 2px 5px;
        font-size:16px;
    }
    .product_industry_content{
        margin:20px 20px;
    }
    .nav-icon{
        margin-left:15px;
        margin-top:12px;
    }
    .vip{
        margin: 0;
        padding: 0 0 16px 16px;
        height: 74px;
    }
    .vip_content{
        position: relative;
        border-radius: 8px;
        height:100%;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);        
    }
    .vip a{
        display:block;
        text-decoration:none;
        color:#409EFF;
        padding-left:40%;
        width:60%;
        height:100%;
        font-size:8px;
    }
    .product_industry_content a:{
        color:black;
    }
    .product_industry_content a:hover{
        background-color:#FFFFFF;
    }
    .img_box {
        /*width: 40%;*/
        width:32px;
        height:32px;
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px;
    }
    .title_box{
        padding-top:10px;
    }
    .imgscale {
        overflow: hidden;
        border-radius: 8px!important;
    }
    .imgscale img {
        transition: all .4s ease-in-out;
        width: 100%;
    }
    .imgscale img:hover {
        transform: scale(1.1);
    }
    .ellipsis-2 {
        display: -webkit-box!important;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .boxshodow-hover:hover {
        box-shadow: 0 2px 8px 0 rgba(0,0,0,.1)!important
    }
    .imgscale-top:hover img {
        transform: scale(1.1)
    }

</style>



