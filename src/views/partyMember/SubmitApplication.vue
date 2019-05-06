<template>
    <div class="app-container">
      <el-form :label-position="labelPosition" lable-width="80px" size="medium">
        <el-form-item label="姓名" :label-width="labelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="labelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="籍贯" :label-width="labelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学历" :label-width="labelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家庭住址" :label-width="labelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="labelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单位类别" :label-width="labelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="工作岗位" :label-width="labelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "SubmitApplication",
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
          labelWidth: '80px',
          options: [{
            value: '选项1',
            label: '小学'
          }, {
            value: '选项2',
            label: '初中'
          },{
            value: '选项5',
            label: '高中'
          },
            {
            value: '选项3',
            label: '本科'
          }, {
            value: '选项4',
            label: '研究生'
          }, ],
          value: ''
        }
      },
    }
</script>

<style scoped>

</style>
