<template>
  <div class="app-container">
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="提交入党申请书" description="日期1"></el-step>
      <el-step title="列入积极分子" description="日期2"></el-step>
      <el-step title="积极分子学习" description="日期3"></el-step>
      <el-step title="列入发展对象" description="日期4"></el-step>
      <el-step title="发展对象学习" description="日期5"></el-step>
      <el-step title="党委预审" description="日期6"></el-step>
      <el-step title="领取入党志愿书" description="日期7"></el-step>
      <el-step title="预备党员" description="日期8"></el-step>
      <el-step title="正式党员" description="日期9"></el-step>
    </el-steps>
    <!--按钮-->
    <hr>
    <div class="x-btn">
      <el-button type="info" v-if="active<8" @click="prev()">上一步</el-button>
      <el-button type="primary" v-if="active==0 || active < 8" @click="next()">下一步</el-button>
      <el-button type="danger" v-if="active==8">完成</el-button>
    </div>
    <!--动态组件-->
    <keep-alive>
      <!--<editor-fold desc="Description">-->
      <SubmitApplication  v-if="active === 0"></SubmitApplication>
      <!--</editor-fold>-->
    </keep-alive>


  </div>
</template>

<script>
    import SubmitApplication from "./SubmitApplication";
    export default {
        name: "JoinParty",
      components: {SubmitApplication},
      data() {
          return {
            active: 0,
          }
      },
      methods: {
          prev() {
            --this.active;
            if (this.active < 0) this.active =0;
          },
        next() {
            if (this.active++ > 8) this.active = 0;
        }
      }
    }
</script>

<style scoped>

</style>
