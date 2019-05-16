<template>
<div>
  <top-bar></top-bar>
  <top-header></top-header>
  <top-banner></top-banner>
  <top-sub></top-sub>
</div>
</template>

<script>
  import TopBar from './components/TopBar'
  import TopHeader from './components/TopHeader'
  import TopBanner from './components/TopBanner'
  import TopSub from './components/TopSub'
    export default {
        name: "index",
      // data (){
      //
      // },
      components: {
        TopBar,
        TopHeader,
        TopBanner,
        TopSub,
        // 'goods': Goods,
        // 'temp-footer': TempFooter,
        // 'play-video': PlayVideo
      }
    }
</script>

<style scoped>

</style>
