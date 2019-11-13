<template>
    <div class="intro">
        <h3 class="title_style">
            {{title}}
        </h3>
        <div class="intro_content">
            <span >
                {{content}}
            </span>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import 'element-ui/lib/theme-chalk/index.css'

    export default {
        name: 'comIntroduce',
        props: {
            title: {
                type: String,
                default(){
                    return ""
                }
            },
            content: {
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
        width: 100%;
        text-align: center;
        background-color: #F8F8F8;
    }
    .title_style{
        text-align:left;
        margin:0;
        background-color: #E6EFFE;
        padding: 15px 0 15px 5px;
    }
    .intro_content{
        text-align: left;
        font-size: 13px;
        padding:15px 15px;
    }
</style>



