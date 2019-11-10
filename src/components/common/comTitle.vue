<template>
    <div class="com_title">
        <h3> {{title}} </h3>
        <el-link v-if='linkInfo.link_href!=""' class="more_link" :href="linkInfo.link_href"> {{linkInfo.link_content}}>> </el-link>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import { getProducIndustry } from '~/api/index.js'

    Vue.use(Divider);
    export default {
        name: 'comTitle',
        props: {
            title: {
                type: String,
                default(){
                    return ""
                }
            },
            linkInfo:{
                type:Object,
                default(){
                    return {
                        "link_content":"更多>>",
                        "link_href":""
                    }
                }
            }
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
        display:inline-block;
    }
    .com_title a:visited {
        text-decoration:none;
    }
    .com_title a:hover{
        background : #eee;
        text-decoration:none;
    }
    .el-link--inner{
        display:inline-block;
        padding: 2px 5px;
        font-size:16px;
    }

    .more_link{
        display:inline-block;
        float:right;
        padding: 2px 5px;
    } 
    .more_link span{
        font-size: 14px;
    }
</style>



