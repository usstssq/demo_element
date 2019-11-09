<template>
    <div class="country_intro">
        <h3 class="header_style header_country_style">
            <span class="country_style">{{title}}</span>
        </h3>
        <div class="country_content">
            <span >
                {{countryInfoContent}}
            </span>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import 'element-ui/lib/theme-chalk/index.css'

    export default {
        name: 'product_industry1',
        props: {
            title: {
                type: String,
                default(){
                    return ""
                }
            },
            countryInfoContent: {
                type: String,
                default(){
                    return ""
                }
            }
        }
    }
</script>

<style>
    .country_intro {
        margin: 0 auto;
        width: 100%;
        text-align: center;
        margin-top: 10px;
        background-color: #F8F8F8;
        border-bottom: 4px solid #6DC7D0;
    }

    .header_style{
        text-align: left;
        margin-top: 5px;
        mamargin-bottom: 5px;
        font-family: "Hiragino Sans GB","Microsoft YaHei";
    }

    .header_country_style{
        height:100%;
        padding-bottom: 0px;
        border-bottom: 2px solid #1E38AC;
        margin-bottom: 0px !important;
        
    }
    .country_style{
        background-color: rgba(187,97,212,1.00);
        padding-top:3px;
        padding-left: 6px;
        padding-right: 6px;
        padding-bottom: 6px;
    }
    .country_content{
        text-align: left;
        font-size: 13px;
    }
</style>



