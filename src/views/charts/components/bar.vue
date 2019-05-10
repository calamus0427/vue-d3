<template>
  <div class="chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'chart-bar',
  data() {
    return {
        data : [30, 86, 168, 281, 303, 365],
    };
  },
  mounted() {
    this.initBar();
  },
  methods: {
    initBar() {
      d3.select(".chart")
        .selectAll("div")
        .data(this.data)
            .enter()
            .append("div")
            .style("width", function(d) { return d + "px"; })
            .text(function(d) { return d; });
    },
  },
};
</script>
<style lang="less">
// 注意：不能用scoped写样式，否则无法加载
.chart  {
    div{
        font: 10px sans-serif;
        background-color: @primary-color;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }

}
</style>

