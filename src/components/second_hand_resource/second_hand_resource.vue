<template>
    <div class="second_had_resource">
        <comTitle :title="comTitle"></comTitle>
        <!-- 筛选 -->
        <el-row style="margin-bottom: 0;">
            <el-col :span="6">
                <el-input type="search" v-model="search" placeholder="请输入关键字">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-table :data="second_hand_resource_content_show" @filter-change="typeFilterChange" stripe border fit style="width: 100%">
            <el-table-column
                prop="index"
                label="编号"
                width="50">
                <template slot-scope="scope">    
                    <span class="col-cont" v-html="highlight(scope.row.index)" ></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="70"
                :filters="type_set"
                :filter-method="filterType"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    <span v-html="highlight(scope.row.type)"></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="content"
                label="消息内容">
                <template slot-scope="scope">    
                    <span class="col-cont" v-html="highlight(scope.row.content)" ></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="num"
                label="数量"
                width="50">
                <template slot-scope="scope">    
                    <span class="col-cont" v-html="highlight(scope.row.num)" ></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="tel"
                label="联系方式"
                width="110">
                <template slot-scope="scope">    
                    <span class="col-cont" v-html="highlight(scope.row.tel)" ></span>
                </template>
            </el-table-column>
        </el-table>
        <div style="float: right" v-if="secondHandResourceContent.length > 5" class="block">
            <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="5"
            :current-page.sync="currentPageNum"
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
                type_set:[
                ],
                search:"",
                filter_obj:"",
                currentPageNum:1
            }
        },
        created() {
            this._init_data()
        },
        computed: {
            content_num: function () {
                return this.filter_table_data.length
            },
            filter_table_data:{
                get(){
                    const filter_obj = this.filter_obj
                    const filter_arr = []
                    Object.values(filter_obj).map(x=>{filter_arr.push.apply(filter_arr,x)})
                    const search = this.search
                    if (search||filter_arr.length!=0) {
                        const filter_table_content = this.secondHandResourceContent.filter(dataNews => {
                             return filter_arr.length == 0 ? Object.keys(dataNews).some(key => {return String(dataNews[key]).toLowerCase().indexOf(search) > -1}):
                             (Object.keys(dataNews).some(key => {return String(dataNews[key]).toLowerCase().indexOf(search) > -1})&filter_arr.indexOf(dataNews.type) > -1)
                        })
                        this.second_hand_resource_content_show = filter_table_content.slice(0,5)
                        return filter_table_content
                    }else{
                        this.second_hand_resource_content_show = this.secondHandResourceContent.slice(0,5)
                        return this.secondHandResourceContent
                    }
                },
                set(v){
                    this.second_hand_resource_content_show = v.slice(0,5)
                }
            }
        },
        methods: {
            _init_data(){
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
            highlight(val){
                val = val + '';
                if (val.indexOf(this.search) !== -1 && this.search !== '') {
                    return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
                } else {
                    return val
                }
            },
            typeFilterChange (filters) {
                this.search = '';
                this.filter_obj = filters;
                this.currentPageNum = 1;
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
    .search_div{
        float:right;
    }
    .second_had_resource{
        width:97%;
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



