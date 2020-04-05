<template>
    <div class="news">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <ul>
            <li v-for="news_item in newsArr">{{news_item.title}}({{formate_date(news_item.publishDate)}})</li>
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
        methods: {
            formate_date(dt){
                if(dt){
                    return dt.slice(0,4) + '-' + dt.slice(4,6) + '-' + dt.slice(6,8)
                }else{
                    return dt
                }                
            }
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
                            "id": 7,
                            "title": "李连和大使出席湖北省同阿尔及利亚举行抗疫经验交流视频会议",
                            "countryId": 11,
                            "sourceUrl": "http://dz.china-embassy.org/chn/xw/t1765411.htm",
                            "state": 1,
                            "publishDate": "20200402160000"
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



