<template>
   <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-menu-item index="/">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </el-menu-item>
    <el-menu-item index="/a">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="/b">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="/c">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="/d">
      <i class="el-icon-setting"></i>
      <span slot="title">导航五</span>
    </el-menu-item>
    <el-menu-item index="/e">
      <i class="el-icon-setting"></i>
      <span slot="title">导航六</span>
    </el-menu-item>
    <el-menu-item index="/f">
      <i class="el-icon-setting"></i>
      <span slot="title">导航七</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  methods: {
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo{
  height:100%;
}
</style>
