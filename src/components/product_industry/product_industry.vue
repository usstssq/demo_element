<template>
    <div class="product_industry">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <el-link v-for="(factory,index) in manufacture_list" :underline="false" :href="factory.url_address" target="_blank" type="primary">{{factory.company_name}}</el-link>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import comTitle from '~/components/common/comTitle.vue'
    import { getProducIndustry } from '~/api/index.js'

    Vue.use(Divider);
    export default {
        name: 'product_industry1',
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
            }
        },
        created() {
            this._getProductIndustry()
        },
        methods: {
            _getProductIndustry() {
                getProducIndustry().then((productIndustry) => {
                    this.manufacture_list = productIndustry.manufacture_list
                })
            }
        },
        data(){
            return{
                manufacture_list:[
                    {
                        "company_name":"XXX厂创",
                        "url_address":"http://www.baidu.com"
                    }
                ],
                com_title:""
            };
        }
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
</style>



