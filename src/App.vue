<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import 'style/less/common.less';
  @import 'style/less/sty.less';
  #app {
    height: 100%;
  }

</style>
