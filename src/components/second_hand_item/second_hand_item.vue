<template>
    <div class="second_hand_item">
        <a href="javascript:void(0)" class="second_hand_img">
            <div class="noimage" v-if="csecondHandItem.picInfoList.length==0">无图片</div>
            <img v-if="csecondHandItem.picInfoList.length>0" :src="imageUrlL[0]" @click="openSecondHandDLG(csecondHandItem)" width="130" height="72" alt="图片">
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
                            <img stretch="true" :src="item" v-if="item" type="image/jpeg">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="second_hand_desc dialog-image-desc">
                    <h4>{{csecondHandItem.name}}</h4>
                    <div>数量：{{csecondHandItem.state}}</div>
                    <div>Tel：{{csecondHandItem.contactorPhone}}</div>
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
        props: {
            imageUrl:{
                type: String,
                default(){
                    return ""
                }
            },
            secondHandItem:{
                type:Object,
                default(){
                    return {
                            "id": 3,
                            "name": "奔驰转让,17万公里",
                            "count": 1,
                            "contactorPhone": "13100010002",
                            "exchangeType": 0,
                            "state": 1,
                            "rankOrder": 1,
                            "countryId": 11,
                            "modifyDate": "20191229014256",
                            "picId": null,
                            "picInfoList": [
                                {
                                    "id": 13,
                                    "countryId": null,
                                    "equipId": 3,
                                    "path": "static/exchage_info/Benz_lz_1.jpg",
                                    "state": 1,
                                    "modifyDate": "20200401230151",
                                    "imgSize": null,
                                    "imgContent": null
                                }
                            ]
                    }
                }
            }
        },
        created() {
            this.csecondHandItem = this.secondHandItem;
            window.csecondHandItem = this.secondHandItem;
            // this._getExchangeEquip();
        },
        // watch:{
        //     secondHandItem(){
        //         this._getExchangeEquip()
        //     }            
        // },
        // watch: {
        //     //正确给 cData 赋值的 方法
        //     secondHandItem:{
        //         handler(newVal,oldVal){
        //             console.log(`watch secondHandItem....`);
        //             this.csecondHandItem = newVal;  //newVal即是chartData
        //             newVal&&this._getExchangeEquip(); //newVal存在的话执行drawChar函数
        //         },
        //         deep:true
        //     }
        // },
        data(){
            return {
                csecondHandItem:{
                    type:Object,
                    default(){
                        return {
                            "id": 3,
                            "name": "奔驰转让,17万公里",
                            "count": 1,
                            "contactorPhone": "13100010002",
                            "exchangeType": 0,
                            "state": 1,
                            "rankOrder": 1,
                            "countryId": 11,
                            "modifyDate": "20191229014256",
                            "picId": null,
                            "picInfoList": [
                                {
                                    "id": 13,
                                    "countryId": null,
                                    "equipId": 3,
                                    "path": "static/exchage_info/Benz_lz_1.jpg",
                                    "state": 1,
                                    "modifyDate": "20200401230151",
                                    "imgSize": null,
                                    "imgContent": null
                                }
                            ]
                        }
                    }
                },
                dialogVisible:false,
                imageUrlL:[]
            }
        },
        methods: {
            openSecondHandDLG(currentItem){
                this.dialogVisible = true;
                this.cImageInfo = currentItem;
            },
            _getExchangeEquip() {
                let url = `trade/main_content/common/get_img/${this.imageUrl}`;
                this.imageUrlL = [];
                if(this.imageUrl){
                    for(let item in this.csecondHandItem.picInfoList){
                        getExchangeEquipImg(url,{
                            "id":this.csecondHandItem.picInfoList[item].id,
                            "equipId":this.csecondHandItem.picInfoList[item].equipId,
                            "countryId":this.csecondHandItem.picInfoList[item].countryId
                        }).then((exchangeEquipImg) => {
                            this.imageUrlL.push(exchangeEquipImg);
                            console.log(`this.imageUrlL.length:${this.imageUrlL.length}`);
                        })
                    }
                }
            }
        },
        mounted(){
            this._getExchangeEquip()
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
        color:black;
    }
    .second_hand_item .second_hand_img .noimage{
        width:100%;
        height:100%;
        line-height: 72px;
        text-align: center;
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
    .dialog-image-block img{
        max-height: 100%;
        width: auto;
        /*max-width:100%; */
        /*height:auto;*/
    }
    .dialog-image-desc{
        float: left;
        margin: 0;
        width:370px;
    }
    .el-carousel--horizontal{
        height: 250px;
    }
    .el-carousel__container{
        height: 250px;
    }
</style>



