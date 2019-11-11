<template>
    <div class="second_had_resource">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <el-table :data="secondHandResourceContent" stripe border fit style="width: 100%">
            <el-table-column
                prop="index"
                label="编号"
                width="50">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="60">
            </el-table-column>
            <el-table-column
                prop="content"
                label="消息内容">
            </el-table-column>
            <el-table-column
                prop="num"
                label="数量"
                width="50">
            </el-table-column>
            <el-table-column
                prop="tel"
                label="联系方式"
                width="110">
            </el-table-column>
        </el-table>
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
            secondHandResourceContent:{
                type:Array,
                default(){
                    return 
                        [{
                            "index":1,
                            "type":"求购",
                            "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                            "num":1,
                            "tel":13000000001
                        }]
                }
            }
        }
    }
</script>

<style>
    .second_had_resource{
        width:95%;
    }
    a:hover{
        background : #eee
    }
    .el-link--inner{
        display:inline-block;
        padding: 2px 5px;
        font-size:16px;
    }
    .el-table__row .cell{
        width:100%;
        white-space:nowrap;
        word-break:keep-all;
        text-overflow:ellipsis;
    }
</style>



