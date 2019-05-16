<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">党建要闻</el-menu-item>
      <el-submenu index="2">
        <template slot="title">党务公开</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">党建专题</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">基层党建</a></el-menu-item>
      <el-menu-item index="5">三会一课</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>
.header{
  margin: 0 auto;
  text-align: center;

}
</style>
