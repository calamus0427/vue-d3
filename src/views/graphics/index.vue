<template>
    <div style="width: 500px">
        <a-tabs defaultActiveKey="1" tabPosition="left">
            <a-tab-pane tab="简单线条" key="1">
                <chart-line />
            </a-tab-pane>
            <a-tab-pane tab="条形图" key="2">
                <chart-bar />
            </a-tab-pane>
            <a-tab-pane tab="圆" key="3">
                <chart-circle />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import chartLine  from './components/line.vue' ;
import chartBar  from './components/bar.vue' ;
import chartCircle  from './components/circle.vue' ;

export default {
    name: 'charts',
    components:{
        chartLine,
        chartBar,
        chartCircle
    }

}
</script>
