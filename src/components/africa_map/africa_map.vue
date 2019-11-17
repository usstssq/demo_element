<template>
    <div class="africa_map">
          <div id="content">
            <div class="desc">
                <div class="have_flag_out">
                    <div class="have_flag"></div>
                    <div class="have_flag_content">存有办事处的国家</div>
                </div>
                <div class="unhave_flag_out">
                    <div class="have_flag unhave_flag">
                    </div>
                    <div class="have_flag_content">未存有办事处诚招代理</div>
                </div>
            </div>
            <svg width="620px" height="600px">
                <g class="map"></g>
                <g class="bounding-box">
                    <rect></rect>
                </g>
                <g class="centroid">
                    <circle r="4"></circle>
                </g>
            </svg>
        </div>
    </div>
</template>
<script>
    import * as d3 from "d3"
    import { getAfricaMap } from '~/api/index.js'

    var data = d3.range(0, 9);

    let tooltip = d3.select("body").append("div").style("position", "absolute").style("z-index", "10").style("visibility", "hidden").attr("class", "tooltip");

    // Show tooltip on hover
    function showDetail(event, content) {
        // show tooltip with information from the __data__ property of the element
        let x_hover = 0;
        let y_hover = 0;

        let tooltipWidth = parseInt(tooltip.style('width'));
        let tooltipHeight = parseInt(tooltip.style('height'));
        let classed, notClassed;

        let right_margin = document.body.clientWidth - 80;

        // 30: 鼠标与tooltip 的距离
        // 20: tooltip的左右padding之和
        if(event.pageX + 30 + 20 + tooltipWidth > right_margin){
            x_hover = tooltipWidth + 40;
            classed = 'right';
            notClassed = 'left';
        }else{
            x_hover = - 30;
            classed = 'left';
            notClassed = 'right';
        }

        y_hover = (document.body.clientHeight - event.pageY < (tooltipHeight + 4)) ? event.pageY - (tooltipHeight + 4) : event.pageY - tooltipHeight/2;
        return tooltip
            .classed(classed, true)
            .classed(notClassed, false)
            .style("visibility", "visible")
            .style("top", y_hover + "px")
            .style("left", (event.pageX - x_hover) + "px")
            .html(content);
    }

    // Hide tooltip on hover
    function hideDetail() {
        // hide tooltip
        return tooltip.style("visibility", "hidden");
    }

    const projection = d3.geoMercator()
        .scale(400)
        .translate([200, 280])
        .center([0, 5]);

    const geoGenerator = d3.geoPath()
        .projection(projection);

    function bindHover() {
        document.body.addEventListener('mousemove', function(e) {
            if (e.target.nodeName == 'path') {
                let d_info = d3.select(e.target).data()[0]["info"];
                // let content = `name:${d.name}<br> gender:${d.gender}<br>tel:${d.tel}`;
                let d_prop = d3.select(e.target).data()[0]["properties"];
                let content = "";
                if (d_info.have_orgin_flag==true){
                    content = `${d_prop.name_cn}`;
                }else {
                    content = "该国家平台暂未开放诚招合作代理"
                }                
                showDetail(e, content);
            }
        });
        document.body.addEventListener('mouseout', function(e) {
            if (e.target.nodeName == 'path') hideDetail();
        });
    }
    const update = geojson => {
        const u = d3.select("#content g.map")
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("stroke","#000")
            .attr("stroke-width",1)
            .attr("fill",function(d,i){
                return d.info.background_color
            })
            .style("opacity", function(d,i){
                if(d.info.have_orgin_flag==false){
                    return 0.5
                }else{
                    return 1
                }
            })
            .attr("d",geoGenerator)
            .on("mouseover",function(d,i){
                d3.select(this)
                    .attr("fill","#BDBE46");
            })
            .on("mouseout",function(d,i){
                d3.select(this)
                    .attr("fill",d.info.background_color);
            });
            bindHover();
    }
    export default {
        name: 'africa_map',
        created() {
            this._getAfricaMapData()
        },
        methods: {
            _getAfricaMapData() {
                getAfricaMap().then((map_data) => {
                    update(map_data)
                })
            }
        }
    }
</script>

<style>
body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 14px;
    color: #333;
}
#content{
    position:relative;
    margin-left:20px;
    background-color:#DDDFE6;
}
#content .map path {
    stroke: #fff;
}
#content .bounding-box rect {
    fill: none;
    stroke: #333;
    stroke-dasharray: 2,1;
}
#content .centroid {
    display: none;
}
#content .centroid circle {
    fill: red;
}
.tooltip {
    top: 100px;
    left: 100px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #F6F6F6;
    opacity: .9;
    color: #413F40;
    padding: 10px;
    min-width: 50px;
    min-width: 12.75vmin;
    font-size: 2.25vmin;
    line-height: 24pt;
    font-family: 'Lora', serif;
    font-weight: lighter;
    visibility: visible;
}

.tooltip.right::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    opacity: .9;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #F6F6F6;
    right: -8px;
    top: 20px;
}

.tooltip.left::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    opacity: .9;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    left: -8px;
    border-right: 8px solid #F6F6F6;
    top: 20px;
}
.unhave_flag_out {
    position:relative;
    overflow:hidden;
}
.have_flag_out{
    position:relative;
    overflow:hidden;
}
.desc{
    width:200px;
    height:60px;
    position:absolute;
    bottom:50px;
    left:50px;
    line-height:25px;
}
.desc .have_flag{
    float:left;
    width:30px;
    height:20px;
    margin:5px;
    background-color:#E29471;
    line-height:25px;
}
.desc .unhave_flag{
    opacity:0.5;
    line-height:25px;
}
.have_flag_content{
    float:left;
    line-height:30px;
}
</style>




