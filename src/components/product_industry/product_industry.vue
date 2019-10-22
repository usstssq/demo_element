<template>
    <div>
        <span> 生产制造业 </span>
        <span v-for="(factory,index) in manufacture_list">
            <el-link href="https://element.eleme.io" target="_blank" type="primary">{{factory}}</el-link>
            <span v-if="(index+1) % 5 ==0"><br/></span>
            <span v-else><el-divider direction="vertical"></el-divider></span>
        </span>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

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
        data:function(){
            return{
                manufacture_list:['XXX厂创','防盗门厂','电熔厂','起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂',
                    '起重机厂','气体厂','液压板厂','xxx厂','XXX厂']
            };
        }
    }
</script>





