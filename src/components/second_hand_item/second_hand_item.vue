<template>
    <div class="second_hand_item">
        <a href="javascript:void(0)" class="second_hand_img">
            <img :if="imageUrlL.length>0" :src="imageUrlL[0]" @click="openSecondHandDLG(csecondHandItem)" width="130" height="72" alt="图片">
        </a>
        <div class="second_hand_desc">
            <a href="#">{{csecondHandItem.name}}</a>
            <div>数量: {{csecondHandItem.count}}  Tel: {{csecondHandItem.contactorPhone}}</div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="60%">
            <div class="second-hand-dialog-image">
                <div class="dialog-image-block">
                    <el-carousel>
                        <el-carousel-item v-for="(item,index) in imageUrlL" :key="item+index">
                            <img :src="item" type="image/jpeg" width="300px" height="300px">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="second_hand_desc dialog-image-desc">
                    <a href="#">{{csecondHandItem.name}}</a>
                    <div>{{csecondHandItem.state}}</div>
                    <div>{{csecondHandItem.contactorPhone}}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import { getExchangeEquipImg } from '~/api/index.js'

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        data(){
            return {
                csecondHandItem: [{
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
                }],
                dialogVisible:false,
                imageUrlL:[]
            }
        },
        // watch:{
        //     secondHandItem(){
        //         this._getExchangeEquip()
        //     }            
        // },
        watch: {
            //正确给 cData 赋值的 方法
            secondHandItem: function(newVal,oldVal){
                this.csecondHandItem = newVal;  //newVal即是chartData
                newVal&&this._getExchangeEquip(); //newVal存在的话执行drawChar函数
            }
        },
        // mounted(){
        //     this._getExchangeEquip()
        // },
        methods: {
            openSecondHandDLG(currentItem){
                this.dialogVisible = true;
                this.cImageInfo = currentItem;
            },
            _getExchangeEquip() {
                let url = "trade/main_content/common/get_img/exchange_equip";
                this.imageUrlL = [];
                for(let item in this.csecondHandItem.picInfoList){
                    getExchangeEquipImg(url,{
                        "id":item.id,
                        "equipId":item.equipId,
                        "countryId":item.countryId
                    }).then((exchangeEquipImg) => {
                        this.imageUrlL.push(exchangeEquipImg)
                    })
                }
            }
        },
        props: {
            secondHandItem:{
                type:Object,
                default(){
                    return {
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
                    }
                }
            }
        }
    }
</script>

<style>
    .second_hand_item{
        border-bottom: 1px solid #e6e6e6;
        overflow: hidden;
        position: relative;
    }
    .second_hand_item .second_hand_img{
        float:left;
        width:130px;
        margin-right: 16px;
        height:72px;
        overflow: hidden;
        display: inline-block;
        position: relative;
    }
    .second_hand_item .second_hand_img img {
        transition: all .4s ease-in-out;
        width: 100%;
        border-radius: 8px!important;
    }
    .second_hand_item .second_hand_img img:hover {
        transform: scale(1.1);
    }
    .second_hand_item a{
        text-decoration: none;
    }
    .second_hand_desc{
        float: left;
        margin: 0 10px 10px 0;
    }
    .second_hand_desc a{
        display: inline-block;
        font-size: 16px;
        line-height: 28px;
        color:#333;
        vertical-align: middle;
        height: 28px;
    }
    .second_hand_desc div{
        font-size: 12px;
        margin-top: 6px;
    }
    .second-hand-dialog-image{
        overflow: hidden;
    }
    .dialog-image-block{
        height: 250px;
        width: 400px;
        overflow: hidden;
        float: left;
        margin-right: 20px;
    }
    .dialog-image-desc{
        float: left;
        margin: 0;
    }
</style>



