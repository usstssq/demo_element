<template>
    <div class="news">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <ul>
            <li v-for="news_item in newsArr">{{news_item.content}}{{news_item.update_time}}</li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import comTitle from '~/components/common/comTitle.vue'
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
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
            newsArr:{
                type:Array,
                default(){
                    return [{
                            "index":1,
                            "content":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                            "update_time":"2018-04-26"
                        }
                    ]
                }
            }
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
    .el-table__row td div{
        text-overflow:ellipsis;
    }
</style>



