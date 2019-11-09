<template>
    <div class="product_industry">
        <h3> {{title}} </h3>
        <el-link v-for="(factory,index) in manufacture_list" :underline="false" :href="factory.url_address" target="_blank" type="primary">{{factory.company_name}}</el-link>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import { getProducIndustry } from '~/api/index.js'

    Vue.use(Divider);
    export default {
        name: 'product_industry1',
        props: {
            title: {
                type: String,
                default(){
                    return ""
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
                ]
            };
        }
    }
</script>

<style>
    a:hover{
        background : #eee
    }
    .el-link--inner{
        display:inline-block;
        padding: 2px 5px;
        font-size:16px;
    }
</style>



