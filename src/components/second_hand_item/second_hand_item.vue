<template>
    <div class="second_hand_item">
        <a href="javascript:void(0)" class="second_hand_img">
            <img :src="secondHandItem.imageUrl" @click="openSecondHandDLG(secondHandItem)" width="130" height="72" alt="图片">
        </a>
        <div class="second_hand_desc">
            <a href="#">{{secondHandItem.title}}</a>
            <div>{{secondHandItem.desc}}</div>
            <div>{{secondHandItem.tel}}</div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="60%">
            <div class="second-hand-dialog-image">
                <div class="dialog-image-block">
                    <el-carousel>
                        <el-carousel-item v-for="item in cImageInfo.cImageList" :key="item">
                            <img :src="item">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="second_hand_desc dialog-image-desc">
                    <a href="#">{{cImageInfo.title}}</a>
                    <div>{{cImageInfo.desc}}</div>
                    <div>{{cImageInfo.tel}}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        data(){
            return {
                cImageInfo: {
                    "cImageList":[
                        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2570243317.jpg",
                        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578045524.jpg",
                        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2577437186.jpg"
                    ],
                    "id":1,
                    "title":"求购 打包机 1台",
                    "desc":"求购打包机一台，希望8成新，可上门自提。期望价格9元。",
                    "tel":"18818262629",
                    "imageUrl":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
                },
                dialogVisible:false
            }
        },
        methods: {
            openSecondHandDLG(xx){
                this.dialogVisible = true;
                this.cImageInfo = {
                    "cImageList":[
                        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2570243317.jpg",
                        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578045524.jpg",
                        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2577437186.jpg"
                    ],
                    "id":1,
                    "title":"求购 打包机 1台",
                    "desc":"求购打包机一台，希望8成新，可上门自提。期望价格9元。",
                    "tel":"18818262629",
                    "imageUrl":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
                }
            }
        },
        props: {
            secondHandItem:{
                type:Object,
                default(){
                    return {
                        "id":1,
                        "title":"求购 打包机 1台",
                        "desc":"求购打包机一台，希望8成新，可上门自提。期望价格9元。",
                        "tel":"18818262629",
                        "imageUrl":"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/95490.png"
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



