<template>
<div class="register-container">
  <el-form
    :model="registerForm"
    :rules="registerRules"
    ref="registerForm"
    class="card-box register-form">
    <h3 class="title">注册</h3>
    <span class="top-title">组织信息</span>
    <div class="top">
      <label>组织名称：</label>
      <el-form-item prop="organName">
        <el-input v-model="registerForm.organName" auto-complete="off" placeholder="请填写政府、事业单位、企业及其他组织的党组名称"/>
      </el-form-item>
      <label>所在地区：</label>
      <div class="">
        <el-cascader
          :options="options"
          v-model="registerForm.organRegion"
          @change="handleChange">
        </el-cascader>
      </div>
    </div>
    <div class="line"></div>
    <span class="top-title">管理员信息</span>
    <div class="top">
      <label>管理员姓名：</label>
      <el-form-item prop="chineseName">
        <el-input v-model="registerForm.chineseName" auto-complete="off" placeholder="请输入您的姓名"/>
      </el-form-item>
      <label>注册账号：</label>
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" auto-complete="off" placeholder="请输入您的注册账号"/>
      </el-form-item>
      <label>管理员邮箱：</label>
      <el-form-item prop="email">
        <el-input v-model="registerForm.email" auto-complete="off" placeholder="请输入您的邮箱"/>
      </el-form-item>

      <label>管理密码：</label>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="大写字母（不少于一位）+小写字母+数字，8-20位"/>
      </el-form-item>
      <label>确认密码：</label>
      <el-form-item prop="repassword">
        <el-input type="password" v-model="registerForm.repassword" auto-complete="off" placeholder="请再次输入密码"/>
      </el-form-item>
    </div>
    <div class="line"></div>
    <el-button class="finish-button">
      完成注册
    </el-button>
  </el-form>

</div>
</template>

<script>
    export default {
        name: "Register",
      data () {
          return {
            registerForm: {
              organName: '',
              organRegion: [],
              username: '',
              password: '',
              repassword: '',
              chineseName: '',
              email: ''
            },
            registerRules: {

            },
            options:[{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }],
              }]
            }],
          }
      },
      methods: {
          handleChange(value) {
            console.log(value);
          }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../../styles/mixin";
  $bg: #b31501;
  $dark_gray: #666666;
  $light_gray: #eee;

  .register-container {
    @include relative;
    height: 100vh;
    background-image: linear-gradient(to right, #b31501 0%, #f9d423 100%);
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      /*width: 305px;*/
      height: 40px;
      background: #F4F4F4;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      padding-left: 10px;
      margin-bottom: 30px;
      outline: none;
      color: #333;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 70%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_register {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      color: $dark_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .top {
      width: 640px;
      margin: 0 auto;
      position: relative;
    }
    .top-title {
      font-size: 24px;
      color: $dark_gray;
      padding-top: 30px;
      margin-left: 120px;
      font-weight: bold;
    }
    .el-cascader {
      width: 70%;
    }

    label {
      color: #666666;
      font-size: 20px;
      text-align: right;
      width: 126px;
      display: inline-block;
      margin-right: 5px;
      float: left;
      margin-top: 10px;
    }
    .line {
      width: 960px;
      height: 1px;
      margin: 30px auto;
      background: #EEEEEE;
      display: block;
    }
    .register-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 1200px;
      padding: 35px 35px 15px 35px;
      margin: 50px auto;
      border-radius: 5px;
      background-color: #fff;
    }
    .el-form-item {
      /*border: 1px solid rgba(255, 255, 255, 0.1);*/
      /*background: rgba(0, 0, 0, 0.1);*/
      border-radius: 5px;
      /*color: #454545;*/
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
    .register {
      font-size:14px;
      line-height:30px;
      color: #889aa4;
      cursor: pointer;
      float:right;
    }

    .finish-button {
      width: 200px;
      display: block;
      margin: 0 auto;
      color: white;
      font-size: 20px;
      background-color: $bg;
      margin-bottom: 45px!important;
    }
    .finish-button:hover {
      background-color: #981301;
      border-color: #EF9E6F;

    }
  }
</style>
