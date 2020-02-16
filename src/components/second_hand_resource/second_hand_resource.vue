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
        </div>
        <div v-for="second_hand_item in secondHandItemList">
            <secondHandItem :secondHandItem="second_hand_item"></secondHandItem>
        </div>
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
                search:"",
                second_hand_resource_content_show:[{
                    "index":1,
                    "type":"求购",
                    "content":"包装厂处理半自动打钉机1台，17年的设备，广东产，进价28.6万",
                    "num":1,
                    "tel":13000000001
                }]
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
                },
                set(v){
                }
            }
        },
        methods: {
            _init_data(){
            }
        },
        props: {
            secondHandItemList:{
                type: Array,
                default(){
                    return [{
                        "id":1,
                        "title":"求购 打包机 1台",
                        "desc":"求购打包机一台，希望8成新，可上门自提。期望价格9元。",
                        "tel":"18818262629",
                        "imageUrl":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
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



