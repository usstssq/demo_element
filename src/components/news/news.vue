<template>
    <div class="news">
        <h3> {{title}} </h3>
        <ul>
            <li></li>
        </ul>        
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        props: {
            title: {
                type: String,
                default(){
                    return ""
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



