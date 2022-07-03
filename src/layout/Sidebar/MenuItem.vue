<template>
  <div>
    <!-- {{props.menuList}} -->
    <!-- <template v-if="props.menuList && !props.menuList.children">
      <el-menu-item :index="props.menuList.path">
        <el-icon>
          <svg-icon :icon="props.menuList.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ props.menuList.meta.title }}</span>
      </el-menu-item>
    </template>

    <template
      v-if="
        props.menuList.children &&
        props.menuList.children &&
        props.menuList.children.length > 0
      "
    >
      <el-sub-menu :index="item">
        <template #title>
          <el-icon>
            <svg-icon :icon="props.menuList.meta.icon"></svg-icon>
          </el-icon>
          <span>{{ props.menuList.meta.title }}</span>
        </template>
      </el-sub-menu>
    </template> -->

    <!-- 第一层数据 判断 没 chiildren -->
    <template v-if="item && !item.children">
      <el-menu-item :index="item.path">
        <el-icon>
          <svg-icon :icon="item.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 第一层数据 判断 有 chiildren -->
    <template v-if="item && item.children && item.children.length > 0">
      <el-sub-menu :index="item">
        <template #title>
          <el-icon>
            <svg-icon :icon="item.meta.icon"></svg-icon>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-if="item.children">
          <!-- 递归 -->
          <MenuItem
            v-for="ele in item.children"
            :key="ele"
            :menuList="ele"
          ></MenuItem>
        </template>
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
// import SidebarMenu from './SidebarMenu'

const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
// eslint-disable-next-line
const item = props.menuList
</script>
<style lang="scss" scoped></style>
