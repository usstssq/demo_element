<template>
    <div class="second_had_resource">
        <div id="title">
            <h3> {{comTitle}} </h3>
            <!-- 筛选 -->
            <div class="search">
                <el-input type="search" v-model="search" placeholder="请输入关键字" size="mini">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <el-dropdown :hide-on-click="false" class = "second_type_select">
                <span class="el-dropdown-link">
                请选择二手信息类型<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-checkbox-group v-model = "checkboxVal">
                        <el-dropdown-item v-for = "item in typeSet">
                            <el-checkbox :label="item">{{item}}</el-checkbox>
                        </el-dropdown-item>
                        </el-checkbox-group>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div v-for="second_hand_item in current_table_content">
            <secondHandItem :secondHandItem="second_hand_item"></secondHandItem>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="content_num"
            :page-size="5"
            @current-change="change_page">
        </el-pagination>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import secondHandItem from '~/components/second_hand_item/second_hand_item.vue'

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        components: {
            secondHandItem
        },
        data(){
            return {
                checkboxVal:[],
                typeSet:[],
                search:"",
                // secondHandItemListNow:[{
                //     "index":1,
                //     "type":"求购",
                //     "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                //     "num":1,
                //     "tel":13000000001
                // }],
                current_table_content:[{
                    "id": 6,
                    "name": "2手挖掘机",
                    "count": 1,
                    "contactorPhone": "13100010002",
                    "exchangeType": 1,
                    "state": 1,
                    "rankOrder": 9999,
                    "countryId": 1,
                    "modifyDate": "20191229014256",
                    "picId": null,
                    "picInfoList": [
                        {
                            "id": 1,
                            "countryId": null,
                            "equipId": 6,
                            "path": "static/equip_img/small-icon_1.jpeg",
                            "state": 1,
                            "modifyDate": null,
                            "imgSize": null,
                            "imgContent": null
                        }]
                    // "index":1,
                    // "type":"求购",
                    // "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                    // "num":1,
                    // "tel":13000000001
                }]
            }
        },
        created() {
            this._init_data()
        },
        computed: {
            content_num: function () {
                // return this.filter_table_data.length
                return this.secondHandItemListNow.length
            },
            secondHandItemListNow:{
                get(){
                    const search = this.search
                    if (search||this.checkboxVal.length!=0) {
                        const filter_table_content = this.secondHandItemList.filter(dataNews => {
                             return this.checkboxVal.length == 0 ? Object.keys(dataNews).some(key => {return String(dataNews[key]).toLowerCase().indexOf(search) > -1}):
                             (Object.keys(dataNews).some(key => {return String(dataNews[key]).toLowerCase().indexOf(search) > -1})&this.checkboxVal.indexOf(dataNews.exchangeType) > -1)
                        })
                        this.current_table_content = filter_table_content.slice(0,5)
                        return filter_table_content
                    }else{
                        this.current_table_content = this.secondHandItemList.slice(0,5)
                        return this.secondHandItemList
                    }
                },
                set(v){
                    this.current_table_content = v.slice(0,5)
                }
            }
        },
        watch:{
            checkboxVal(valArr) {
                this.secondHandItemListNow = this.secondHandItemList.filter(x=>{
                    return valArr.indexOf(x.exchangeType) > -1
                })
            },
            secondHandItemList(newArr){
                let type_set = new Set();
                newArr.map(x=>{
                    // console.log(`22222${JSON.stringify(x)}`)
                    type_set.add(x.exchangeType);
                });
                // console.log(`11111111${JSON.stringify(type_set)}`)
                this.typeSet = [...type_set]
            }
        },
        methods: {
            _init_data(){
                this.secondHandItemListNow = this.secondHandItemList.slice(0,this.secondHandItemList.length)
                this.current_table_content = this.secondHandItemListNow.slice(0,5)
                let type_set = new Set();
                this.secondHandItemList.map(x=>{
                    // console.log(`22222${JSON.stringify(x)}`)
                    type_set.add(x.exchangeType);
                });
                // console.log(`11111111${JSON.stringify(type_set)}`)
                this.typeSet = [...type_set]
            },
            prev_page(val){
                let start_index = (val-1)*5,
                    end_index = val*5;
                this.current_table_content = this.secondHandItemListNow.slice(start_index,end_index);
            },
            next_page(val){
                let start_index = (val-1)*5,
                    end_index = val*5;
                this.current_table_content = this.secondHandItemListNow.slice(start_index,end_index);
            },
            change_page(val){
                let start_index = (val-1)*5,
                    end_index = val*5;
                this.current_table_content = this.secondHandItemListNow.slice(start_index,end_index);
            }
        },
        props: {
            secondHandItemList:{
                type: Array,
                default(){
                    return [
                        {
                            "id": 6,
                            "name": "2手挖掘机",
                            "count": 1,
                            "contactorPhone": "13100010002",
                            "exchangeType": 1,
                            "state": 1,
                            "rankOrder": 9999,
                            "countryId": 1,
                            "modifyDate": "20191229014256",
                            "picId": null,
                            "picInfoList": [
                                {
                                    "id": 1,
                                    "countryId": null,
                                    "equipId": 6,
                                    "path": "static/equip_img/small-icon_1.jpeg",
                                    "state": 1,
                                    "modifyDate": null,
                                    "imgSize": null,
                                    "imgContent": null
                                }]
                        }]
                }
            },
            comTitle: {
                type: String,
                default(){
                    return ""
                }
            }
        }
    }
</script>

<style>
    #title{
        position: relative;
        background-color:#F8F8F8;
        padding:15px 0;
    }
    #title h3{
        margin:0 0;
        padding-left:5px;
        display:inline-block;
    }
    #title .search{
        float:right;
        margin-right:20px;
    }
    #title .second_type_select{
        float: right;
        margin-right:20px;
    }
    .search_div{
        float:right;
    }    
    .second_had_resource{
        width:97%;
    }
    .second_had_resource .el-pagination{
        float: right;
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



