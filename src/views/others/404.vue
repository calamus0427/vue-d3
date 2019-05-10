<template>
  <div class="main">
      <section>
          <div class="content">抱歉!访问的页面不存在.</div>
          <a-button type="primary" class="gohome" @click="backToHome">回首页 :P</a-button>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.main{
    display: flex;
    justify-content: center;
    align-items:center;
    >section {
        justify-content: center;
        align-items:center;
        display: inherit;
        flex-direction: column;
        width:400px;
        height:200px;
        margin-top:15%;
        background-color: white;
        border-radius:15px;
        .content{
        font-size:1.7rem;
        }

        .gohome{
        margin-top:15px;
        }

    }
}
</style>
