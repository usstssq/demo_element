<template>
    <div class="recru_info">
        <v-header></v-header>
        <div id="htmlBody">
            <h1 style="text-align: center">{{recru_title}}</h1>
            <p><strong>公司简介</strong></p>
            <p>
                小米科技有限责任公司成立于2010年03月03日，注册地位于北京市海淀区西二旗中路33号院6号楼6层006号，法人代表为雷军。经营范围包括技术开发；货物进出口、技术进出口、代理进出口；销售通讯设备、厨房用品、卫生用品（含个人护理用品）、日用杂货、化妆品、医疗器械Ⅰ类、Ⅱ类、避孕器具、玩具、体育用品、文化用品、服装鞋帽、钟表眼镜、针纺织品、家用电器、家具（不从事实体店铺经营）、花、草及观赏植物、不再分装的包装种子、照相器材、工艺品、礼品、计算机、软件及辅助设备、珠宝首饰、食用农产品、宠物食品、电子产品、摩托车、电动车、自行车及零部件、智能卡、五金交电（不从事实体店铺经营）、建筑材料（不从事实体店铺经营）；维修仪器仪表；维修办公设备；承办展览展示活动；会议服务；筹备、策划、组织大型庆典；设计、制作、代理、发布广告；摄影扩印服务；文艺演出票务代理、体育赛事票务代理、展览会票务代理、博览会票务代理；手机技术开发；手机生产、手机服务（限海淀区永捷北路2号二层经营）；从事互联网文化活动；出版物零售；出版物批发；销售第三类医疗器械；销售食品；零售药品；广播电视节目制作；经营电信业务。（企业依法自主选择经营项目，开展经营活动；从事互联网文化活动、出版物批发、出版物零售、销售食品、经营电信业务、广播电视节目制作、零售药品、销售第三类医疗器械以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）小米科技有限责任公司对外投资13家公司，具有19处分支机构。
            </p>
            <p><strong>职位描述</strong></p>
            <p>团队已完成了数据平台的搭建和数据仓库的建立，正在不断优化OLAP业务；</p>
            <p>我们有较完善的CI系统，使用gerrit提交代码并进行 review，jenkins执行测试；</p>
            <p>我们的服务已经完成了容器化，并搭建了k8s；</p>
            <p>我们基于Spark生态搭建了数据平台，并结合kylin做数据预处理</p>
            <p>我们使用Elesticsearch处理大部分在线业务查询。</p>
            <p><strong>岗位职责</strong></p>
            <p>1. 参与规划和实施公司数据平台的搭建以满足未来1-2年的数据分析要求；</p>
            <p>2. 参与公司CDP平台的整体数据架构设计，完成从业务模型到数据模型的设计工作 ；</p>
            <p>3. 负责基于Spark的数据平台研发工作（包扩离线计算，数据仓库存储和处理等）；</p>
            <p>4. 对业务开发团队提供技术支持，协助方案规划；</p>
            <p>5. 维持线上服务高效稳定，支撑业务和数据量的快速扩张。</p>
            <p><strong>岗位要求</strong></p>
            <p>1. 有 java 开发基础，熟悉 Spark 相关技术，至少有 3 年以上的大数据开发经验；</p>
            <p>2. 熟悉流式计算平台的搭建，例如使用Flink / Spark Streaming和kafka结合的实时数据处理系统，实现数据实时大屏；</p>
            <p>3. 理解离线和实时数据仓库的治理方法和分层逻辑；</p>
            <p>4. 熟悉 Scala 语言，对 Scala 原理、底层技术有深入研究者优先；</p>
            <p>5. 深入理解 MapReduce 工作原理，HDFS 分布式文件系统架构；熟练掌握 Hadoop/Hive/HBASE 的运维和调优方法；</p>
            <p><strong>工作地址</strong></p>
            <p>北京市海淀区西二旗中路33号院6号楼6层006号</p>
            <p><strong>联系方式</strong></p>
            <p>tel:18818262629</p>
            <p>email:18818262629@qq.com</p>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import vHeader from '~/components/common/header.vue'
    import { Divider } from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(Divider);
    export default {
        name: 'second_had_resource',
        components: {
            vHeader
        },
        data(){
            return{
                recru_title:"大数据开发"
            }
        },
        props: {
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
                            "id":1,
                            "title":"驻南使领馆提醒在南中国公民和企业注意安全防范",
                            "mDate":"2018-04-26"
                        }
                    ]
                }
            }
        }
    }
</script>

<style>
    #htmlBody{        
        min-width:576px;
        margin:20px 80px;
    }
    #htmlBody p{
        font-size: 14px;
    }
    #htmlBody p strong{
        font-weight: 700;
        font-size: 16px;
    }
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



