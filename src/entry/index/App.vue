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

<style lang="scss">
  @import '../../../node_modules/normalize.css/normalize.css';// normalize.css 样式格式化
  @import '../../styles/index'; // 全局自定义的css样式
</style>
