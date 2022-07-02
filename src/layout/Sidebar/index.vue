<template>
  <div class="sidebar-content">
    <!-- sidebar 左侧菜单 -->
    <h2 class="layout-title">imooc-admin</h2>

    <!-- 左边菜单 子组件 -->
    <MenuTree :tree="menuList"></MenuTree>

    <!-- <el-menu
      active-text-color="#fff"
      background-color="#304157"
      default-active="/profile"
      text-color="#fff"
      unique-opened
      router
    >
      <template v-for="(item, index) in menuList" :key="item">
        判断 没有子元素
        <template v-if="item && !item.children">
          <el-menu-item :index="item.path">
            <el-icon>
              <svg-icon icon="personnel"></svg-icon>
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>

        判断  有子元素
        <template v-if="item && item.children && item.children.length > 0">
          <el-sub-menu :index="index">
            <template #title>
              <el-icon>
                <svg-icon icon="article"></svg-icon>
              </el-icon>
              <span>{{ item.title }}</span>
              子组件
              <SidebarMenu :item="item"></SidebarMenu>
            </template>
            第三层 数据
            <template v-for="(ele, i) in item.children" :key="i">
              <el-menu-item :index="i.path">
                <el-icon>
                  <svg-icon icon="personnel"></svg-icon>
                </el-icon>
                <span>{{ ele.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>

    </el-menu> -->
  </div>
</template>
<script setup>
// import SidebarMenu from './SidebarMenu'
import MenuTree from './MenuTree'

import { reactive } from 'vue'

const menuList = reactive([
  {
    title: '个人中心',
    path: '/profile'
  },
  {
    title: '用户',
    children: [
      {
        title: '员工管理',
        path: '/staff',
        children: [
          {
            title: '员工管理',
            path: '/staff'
          },
          {
            title: '角色列表',
            path: '/role'
          },
          {
            title: '权限列表',
            path: '/remission'
          }
        ]
      },
      {
        title: '角色列表',
        path: '/role'
      },
      {
        title: '权限列表',
        path: '/remission'
      }
    ]
  },
  {
    title: '文章',
    children: [
      {
        title: '文章排名',
        path: '/article'
      },
      {
        title: '创建文章',
        path: '/created'
      }
    ]
  }
])
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: #304157;
  color: #ccc;
}
.layout-title {
  text-align: center;
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 16px;
}
.menu-conten {
  ::deep.el-menu-vertical-demo {
    color: #bfcbd9;
  }
}
</style>
