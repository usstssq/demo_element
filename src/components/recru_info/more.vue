<template>
    <div class="recru_info">
        <v-header></v-header>
        <div id="htmlBody">
            <comTitle :title="comTitleTxtIn"></comTitle>
            <ul>
                <li v-for="recru_info_item in recruInfoArr">
                    <el-link class="imgscale-top" :underline="false" :href="'/recru_info/'+recru_info_item.id" target="_blank" type="primary">
                            {{recru_info_item.title}}({{recru_info_item.mDate}})
                    </el-link>
                </li>
            </ul>
            <comTitle :title="comTitleTxtOut"></comTitle>
            <ul>
                <li v-for="recru_info_item in recruInfoOutArr">
                    <el-link class="imgscale-top" :underline="false" :href="'/recru_info/'+recru_info_item.id" target="_blank" type="primary">
                            {{recru_info_item.title}}({{recru_info_item.mDate}})
                    </el-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import vHeader from '~/components/common/header.vue'
    import comTitle from '~/components/common/comTitle.vue';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        components: {
            comTitle,
            vHeader
        },
        data(){
            return {
                comTitleTxtIn:"国内招聘信息",
                comTitleTxtOut:"国外招聘信息",
                recruInfoArr:[{
                            "id":1,
                            "title":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                            "mDate":"2018-04-26"
                        }],
                recruInfoOutArr:[{
                            "id":1,
                            "title":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                            "mDate":"2018-04-26"
                        }], 
            }
        }
    }
</script>

<style>
    #htmlBody{
        min-width:576px;
        margin:20px 80px;
    }
    a:hover{
        background : #eee
    }
    .el-link--inner{
        display:inline-block;
        padding: 2px 5px;
        font-size:16px;
    }
    .el-table__row td div{
        text-overflow:ellipsis;
    }
</style>



