<template>
    <div class="second_had_resource">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <el-table :data="second_hand_resource_content_show" @filter-change="typeFilterChange" stripe border fit style="width: 100%">
            <el-table-column
                prop="index"
                label="编号"
                width="50">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="70"
                :filters="type_set"
                :filter-method="filterType"                
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    {{scope.row.type}}
                </template>
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
        <div v-if="secondHandResourceContent.length > 5" class="block">
            <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="5"
            :total="content_num">
            </el-pagination>
        </div>
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
        data(){
            return {
                second_hand_resource_content_show:[{
                    "index":1,
                    "type":"求购",
                    "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                    "num":1,
                    "tel":13000000001
                }],
                show_start_index:0,
                // content_num:0,
                type_set:[
                ],
                filter_table_data:[]
            }
        },
        created() {
            this._init_data()
        },
        computed: {
            content_num: function () {
                return this.filter_table_data.length
            }
        },
        methods: {
            _init_data(){
                // this.content_num = this.secondHandResourceContent.length
                console.log(this.content_num);
                this.filter_table_data = this.secondHandResourceContent
                this.second_hand_resource_content_show = this.filter_table_data.slice(0,5)
                let type_map = new Map();
                this.secondHandResourceContent.map(x=>{
                    type_map.set(x.type,x.type)
                })
                for (let key of type_map.keys()) {
                    this.type_set.push({
                        text:key,
                        value:type_map.get(key)
                    })
                }
            },
            typeFilterChange (filters) {
                console.log(JSON.stringify(filters))
                for (const key in filters) {
                    if (filters[key].length > 0) {
                        // 配合data中定义的数据枚举数组type，确定操作的是那一列
                        this.filter_table_data = this.secondHandResourceContent.filter(x => {
                            // console.log(`x.type:${x.type}`)
                            // console.log(`JSON.stringify(filters[key]):${JSON.stringify(filters[key])}`)
                            // console.log(`JSON.stringify(this.secondHandResourceContent):${JSON.stringify(this.secondHandResourceContent)}`)
                            return filters[key].indexOf(x.type) != -1
                        });
                    }else{
                        this.filter_table_data = this.secondHandResourceContent
                    }
                }
            },
            handleCurrentChange(val){
                let start_index = (val-1)*5,
                    end_index = val*5;
                this.second_hand_resource_content_show = this.filter_table_data.slice(start_index,end_index);
            },
            filterType(value, row){
                return row.type === value;
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



