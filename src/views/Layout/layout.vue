<template>
  <div>
    <!-- <div>左侧导航栏</div>
    <router-view/>
    <div>头部导航栏</div> -->
    <el-container class="layoutContainer">
      <el-aside width="200px" class="aside">
        <Aside/>
      </el-aside>
      <el-container class="rightContainer">
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Aside/aside.vue'
export default {
  name: 'Layout',
  components: {
    Aside
  },
  methods: {
  }
}
</script>

<style lang="scss">
.layoutContainer{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  .aside{
    background:#eeeeee;
  }
  .rightContainer{
    .header{
      background:#999999;
    }
    .main{
      background:#666666;
    }
  }
}
</style>
