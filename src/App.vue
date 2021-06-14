<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: "Helvetica Neue",
  Helvetica, "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑",
  Arial, sans-serif;
  margin: 0;
  background-color: #f1f1f5;
  min-width: 930px;
}
</style>
<script>
import Header from '@/components/Header'
export default {
  components: { Header }
}
</script>
