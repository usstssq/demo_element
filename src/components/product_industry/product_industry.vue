<template>
    <div class="product_industry">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <div class="product_industry_content">
            <el-row>
                <el-col v-for="(factory,index) in cdata_list.general" :key="factory.common.companyId" :span="4">
                    <el-link class="imgscale-top" :underline="false" :href="'/companyDetail/'+factory.common.companyId" target="_blank" type="primary">
                        <img :src="'/'+factory.common.companyId" width="16" height="16" class="nav-icon"></img>
                        {{factory.common.shortName}}
                    </el-link>
                </el-col>
            </el-row>
            <el-row>
                <el-col class = "vip" v-for="(factory,index) in cdata_list.vip" :span="4">
                    <div class="vip_content imgscale-top boxshodow-hover">
                        <a :underline="false" href="www.baidu.com" target="_blank" type="primary">
                            <div class="img_box">
                                <div class="imgscale">
                                    <img :src="imageUrlL[index]" :alt="factory.common.shortName">
                                </div>
                            </div>
                            <div class="title_box">
                                <div class="title ellipsis-2">
                                    {{factory.common.shortName}}
                                </div>
                            </div>
                            <div class="com_tel">
                                <div class="ellipsis-2">
                                    发财热线: {{factory.onsite.onsiteContactPeople}}
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
    import { getImg } from '~/api/index.js'
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
            prod_type:{
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
                            },
                        ],
                        "vip":[
                            {
                                "imageId": 1,
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
                            },
                        ]
                    }
                }
            }
        },
        created() {
            this.cdata_list = this.data_list;
            // window.cdata_list = this.cdata_list
            // console.log(`init cdata_list....`);
            // console.log(`created this.cdata_list.vip.length:${this.cdata_list.vip&this.cdata_list.vip.length}`)
            // this._getVipImg();
        },
        // watch: {
        //     //正确给 cdata_list 赋值的 方法
        //     data_list:function(newVal,oldVal){
        //         console.log(`watch data_list....`);
        //         this.cdata_list = newVal;  //newVal即是chartData
        //         newVal&&this._getVipImg(); //newVal存在的话执行drawChar函数
        //     },
        //     deep: true
        // },
        watch: {
            //正确给 cdata_list 赋值的 方法
            data_list:{
                handler(newVal,oldVal){
                    console.log(`watch data_list....`);
                    this.cdata_list = newVal;  //newVal即是chartData
                    newVal&&this._getVipImg(); //newVal存在的话执行drawChar函数
                },
                deep:true
            }
        },
        // mounted(){
        //     console.log(`mounted this.cdata_list.vip.length:${this.cdata_list.vip&this.cdata_list.vip.length}`)
        //     this._getVipImg()
        //     console.log(`mounted....`);
        // },
        data(){
            return {
                imageUrlL:[],
                cdata_list:{
                    type:Object,
                    default(){
                        return {
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
                                },
                            ],
                            "vip":[
                                {
                                    "imageId": 1,
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
                                },
                            ]
                        }
                    }
                }
            }
        },
        methods: {
            openSecondHandDLG(currentItem){
                this.dialogVisible = true;
                this.cImageInfo = currentItem;
            },
            _getVipImg() {
                let url = `trade/main_content/common/get_img/${this.prod_type}`;
                this.imageUrlL = [];
                if(this.prod_type){
                    // console.log(`_getVipImg this.cdata_list.vip.length:${this.cdata_list.vip&this.cdata_list.vip.length}`)
                    for(let index in this.cdata_list.vip){
                        // console.log(JSON.stringify(item))
                        getImg(url, {
                                id:this.cdata_list.vip[index].imageId,
                                countryId:this.cdata_list.vip[index].onsite.countryId
                                // "id":item.id,
                                // "countryId":item.countryId
                        }).then((exchangeEquipImg) => {
                            this.imageUrlL.push(exchangeEquipImg)
                            if(this.imageUrlL.length>this.cdata_list.vip.length){
                            	this.imageUrlL = this.imageUrlL.slice(1)
                            }
                            // console.log(`_getVipImg this.imageUrlL:${this.imageUrlL.length}`)
                        })
                    }
                }
                // window.imageUrlL=this.imageUrlL;
                // console.log(`_getVipImg this.imageUrlL:${this.imageUrlL.length}`)
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
        background : #eee;
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
        background-color: #5284E6;
        height:100%;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);        
    }
    .vip a{
        display:block;
        text-decoration:none;
        /*color:#409EFF;*/
        color:#fff;
        padding-left:40%;
        width:60%;
        height:100%;
        font-size:8px;
    }
    .product_industry_content a:{
        color:black;
    }
    /*.product_industry_content a:hover{*/
        /*background-color:#409EFF;*/
        /*color:black;*/
    /*}*/
    .product_industry_content a:hover{
        background-color:#FFFFFF;
    }
    .product_industry_content .vip a:hover{
        background-color:#409EFF;
        /*color:black;*/
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
        height: 100%;
    }
    .imgscale img {
        transition: all .4s ease-in-out;
        width: 100%;
        height: 100%;
    }
    .imgscale img:hover {
        transform: scale(1.3);
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
        transform: scale(1.3)
    }

</style>



