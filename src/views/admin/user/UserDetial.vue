<template>
  <div >
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span>我的信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">设置</el-button>
      </div>
      <img :src="img_top1" class="image" alt="头像">
      <div style="padding: 20px;" >
        <div class="text item">
          {{'姓名：'+chineseName}}
        </div>
        <!--<div class="text item">-->
          <!--{{'最近登录时间：'}}-->
        <!--</div>-->
        <!--<div class="text item">-->
          <!--{{'注册时间：'}}-->
        <!--</div>-->
        <div class="text item">
          {{'我的身份：'+role}}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
import img_top1 from '@/assets/images/top1.png'
    export default {
      name: "UserDetial",
      data() {
        return {
          img_top1,
          // tempUser: {
          //   userId: '',
          //   username: '',
          //   password: '',
          //   roleId: '',
          //   chineseName: '',
          //   photoURL: '',
          //   email: '',
          //   Wechat: '',
          //   QQ: ''
          // }
        }
      },
      methods: {

      },
      computed: {
        ...mapGetters([
          'role',
          'chineseName'
        ])
      }
    }
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 20px;
  }
  .image {
    display: block;
    border-radius: 10px;
    margin: auto;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin: 50px;
  }
</style>
