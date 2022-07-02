<template>
  <div class="menu-conten">
    <template v-if="props.data && !props.data.children">
      <el-menu-item :index="props.data.path">
        <el-icon>
          <svg-icon icon="personnel"></svg-icon>
        </el-icon>
        <span>{{ props.data.title }}</span>
      </el-menu-item>
    </template>

    <template
      v-if="props.data && props.data.children && props.data.children.length > 0"
    >
      <el-sub-menu :index="props.data.path">
        <template #title>
          <el-icon>
            <svg-icon icon="article"></svg-icon>
          </el-icon>
          <span>{{ props.data.title }}</span>
        </template>
        <!-- 递归 -->
        <SidebarMenu
          v-for="item in props.data.children"
          :key="item"
          :data="item"
        ></SidebarMenu>
      </el-sub-menu>
    </template>
    <!-- <template v-for="(item, index) in props.data" :key="index">
      第一层数据 判断 没 chiildren
      <template v-if="item && !item.children">
        <el-menu-item :index="item.path">
          <el-icon>
            <svg-icon icon="personnel"></svg-icon>
          </el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>
      第一层数据 判断 有 chiildren
      <template v-if="item && item.children && item.children.length > 0">
        <el-sub-menu :index="item">
          <template #title>
            <el-icon>
              <svg-icon icon="article"></svg-icon>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-sub-menu>
      </template>
    </template> -->
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
