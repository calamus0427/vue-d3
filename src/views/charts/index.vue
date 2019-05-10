<template>
    <div style="width: 500px">
        <a-tabs defaultActiveKey="1" tabPosition="left">
            <a-tab-pane tab="简单线条" key="1">
                <chart-line />
            </a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2">Content of Tab 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab 3</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import chartLine  from './components/line.vue' ;

export default {
    name: 'charts',
    components:{
        chartLine
    }

}
</script>
