<template>
  <svg width="500" height="300" ></svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'chart-line',
  data() {
    return {

    };
  },
  mounted() {
    this.initCircle();
  },
  methods: {
    initCircle() {
      d3.select(this.$el)
        .append('circle')
        .attr('cx', '150')
        .attr('fill', 'pink')
        .attr('cy', '150')
        .attr('r', '100')
    },
  },
};
</script>
<style lang="less" scoped>
svg{
 margin: 25px;
//  fill: @primary-color ;
}
</style>

