<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      style="overflow:auto;height:100vh;background:white;"
    >
      <div class="logo" >
           <a-input-search
            />
      </div>
      <a-menu  mode="inline" :defaultSelectedKeys="[route.name]" @click="clickMenu">
        <a-menu-item key="home">
            <a-icon type="home" /> 
            <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="about">
            <span slot="title"><a-icon type="smile" /><span>基础</span></span>
            <a-menu-item key="graphics">基础图形</a-menu-item>
            <a-menu-item key="charts">基础表格</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{'background':' #fff', 'padding': 0,'position': 'fixed','display':'flex','justify-content':'space-between','width':collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)'}">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapse"
        />
        <div class="logoImg">
            <span style="font-size:14px;font-weight:500;">Vue-D3: <span style="font-size:10px;font-weight:400;">如果真爱有颜色，那一定是雷姆蓝</span> </span>
            <img  src="https://cdn.calamus.xyz/leimu.jpeg" alt="">
        </div>
      </a-layout-header>
      <a-layout-content style="margin:70px 1rem 0 1rem">
        <a-breadcrumb  :style="{ background: '#fff','padding':'0.5rem 1rem' }">
            <a-breadcrumb-item href="text">
                <a-icon type="home" />
                <span>首页</span>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                {{this.$route.name}}
            </a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff','margin-top':'6px','padding':'0.5rem 0 0.5rem 1rem','min-height':'calc(100% - 80px)'}">
            <router-view />
        </div>
        <footer style="text-align:center;padding:0.5rem">© 2016-2019 <a href="//calamus.xyz" target="_blank">Calamus</a> </footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

export default {
  data(){
    return {
      collapsed: false,
      route: this.$route
    }
  },
  mounted() {
      console.log("route",this.$route)
  },
  methods: {
        collapse() {
            this.collapsed = !this.collapsed ;
        },
        clickMenu({item, key, keyPath }) {
            this.$router.push({path:key}) ;
        },
        selectMenu({item, key, selectedKeys}) {
            console.log("select",item, key, selectedKeys)
        }
  }
}
</script>

<style lang="less" scoped>
@keyframes jello {

    from,
    11.1%,
    to {
        transform: translate3d(0, 0, 0);
    }

    22.2% {
        transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
        transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
        transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
        transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
        transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
}

@keyframes textConcatInDown {
    0% {
        letter-spacing: 1em;
        transform: translateZ(400px) translateY(300px);
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        transform: translateZ(0) translateY(0);
        opacity: 1;
    }
}

#components-layout-demo-custom-trigger{
    height:100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  color:#94c5f3;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: #B9D5FA !important;
  margin: 16px;
}
.logoImg{
    span{
        color: @primary-color ;
        padding-right:1rem;
        animation: textConcatInDown 1000ms both;
    }
    img{
        margin-right:3rem;
        height:60px ;
        border-radius:50%;
        &:hover{
            animation: jello 1000ms both
        }
    }
}
</style>

