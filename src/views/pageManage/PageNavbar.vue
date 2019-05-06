<template>
  <div class="app-container">
    <el-form>
    <el-form-item label="页面片段" :label-width="labelWidth">
      <el-button type="text" @click="dialogFormVisible = true">导航栏</el-button>
      <el-dialog title="修改导航栏" :visible.sync="dialogFormVisible">
        <el-form-item label="标题1" label-width="">
          <el-input auto-complete="off" ></el-input>
        </el-form-item>
        <el-form-item label="标题2" label-width="">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题3" label-width="">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
      </el-dialog>
      <el-button type="text" @click="dialogPictureVisible = true">轮播图</el-button>
      <el-dialog title="修改轮播图" :visible.sync="dialogPictureVisible">
        <el-row>
          <el-col :span="8">
            <el-form-item label="图片1" label-width="">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-form-item>
          </el-col >
          <el-col :span="8">
            <el-form-item label="图片2" label-width="">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="图片3" label-width="">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-form-item>
          </el-col>
        </el-row>
        <el-button type="primary">确定</el-button>
      </el-dialog>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "PageNavbar",
      data(){
        return{
          // pageManageForm:{
          //
          // }
          dialogImageUrl: '',
          dialogPictureVisible: false,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          labelPosition: 'left',
          labelWidth: '120px',
        }
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
    }
</script>

<style scoped>

</style>
