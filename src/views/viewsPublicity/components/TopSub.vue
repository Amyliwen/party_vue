<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>推荐阅读</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>推荐阅读2</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>

 <div class="back">
   <img src="http://www.yjsdj.fudan.edu.cn/_upload/article/3f/7b/9517b1dc4910868a32d03af1ab08/80dd4ac5-e2df-4cdf-9544-91c6cbeeca18.jpg">
 </div>
  <!--<div class="back">-->
   <!--<img src="http://www.yjsdj.fudan.edu.cn/_upload/article/12/64/63155bdd49abb07179a8677b4b6a/36009f94-88f8-4929-86b4-b9a4c9ccd4cf.jpg">-->
  <!--</div>-->
  <div class="back">
   <img src="http://www.yjsdj.fudan.edu.cn/_upload/article/f3/5c/ae14330f46b3bc2a92e957c30cf3/da1c24eb-3561-403f-b1ce-a714122ff05a.jpg">
  </div>
  </div>
</template>

<script>
    export default {
        name: "TopSub"
    }
</script>

<style scoped>
.back{
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 100px;
  background-color: #b31501;
  float: left;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
  width: 800px;
  margin: auto;
  padding-top: 20px;
}
</style>
