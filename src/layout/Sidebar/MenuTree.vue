<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="#304157"
      default-active="/profile"
      text-color="#fff"
      class="el-menu-vertical-demo"
      unique-opened
      router
    >
      <!-- 子组件 -->
      <SidebarMenu
        v-for="item in props.tree"
        :key="item"
        :data="item"
      ></SidebarMenu>
    </el-menu>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import SidebarMenu from './SidebarMenu'

const props = defineProps({
  tree: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
