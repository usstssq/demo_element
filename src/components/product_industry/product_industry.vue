<template>
    <div class="product_industry">
        <h1> 生产制造业 </h1>
        <div>
            <span v-for="(factory,index) in manufacture_list">
                <el-link :underline="false" href="https://element.eleme.io" target="_blank" type="primary">{{factory}}</el-link>
                <span v-if="(index+1) % 5 ==0"><br/></span>
                <span v-else><el-divider direction="vertical"></el-divider></span>
            </span>
        </div>
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
            seller: {
                type: Object,
                default() {
                    return {}
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
                manufacture_list:[]
            };
        }
    }
</script>

<style>
    a:hover{
        background : #eee
    }
</style>



