<template>
    <div class="country_intro">
        <h3 class="header_country_style">
            {{title}}
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
        name: 'countryIntro',
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
        margin: 40px 0 0 0;
        width: 97%;
        text-align: center;
        background-color: #F8F8F8;
    }
    .header_country_style{
        text-align:left;
        margin:0;
        background-color: #E6EFFE;
        padding: 15px 0 15px 5px;
    }
    .country_content{
        text-align: left;
        font-size: 13px;
        padding:15px 15px;
    }
</style>



