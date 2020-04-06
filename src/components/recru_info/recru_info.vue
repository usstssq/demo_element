<template>
    <div class="recru_info">
        <comTitle :title="comTitle" :linkInfo="linkInfo"></comTitle>
        <ul>
            <li v-for="recru_info_item in recruInfoArr">
                <el-link class="imgscale-top" :underline="false" :href="'/recru_info/'+recru_info_item.id" target="_blank">
                        {{recru_info_item.title}}({{formate_date(recru_info_item.modifyDate)}})
                </el-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import comTitle from '~/components/common/comTitle.vue';
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
            recruInfoArr:{
                type:Array,
                default(){
                    return [{
                            "id": 1,
                            "title": "成本核算结算员",
                            "companyNameEn": "sanyi",
                            "companyNameCh": "三一重工",
                            "content": "1、物流费用结算；\n2、 参与定价（定价前数据收集整理、定价时根据技术排料、开发价格核算订货会成衣成本、倍率，订货会后将现场修改的数据整理给相关部门）；\n3、 生产类合同审核，成本控制；\n4、 生产类合同管理、文件扫描、存档\n5、合同结算、成本核算、成本数据分析",
                            "recruitmentNum": 2,
                            "contactPhone": 1301212122,
                            "modifyDate": "20200405045106",
                            "state": 1,
                            "countryId": 11
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



