<template>
  <div class="sidebar-content">
    <!-- 菜单 -->
    <!-- sidebar 左侧菜单 -->
    <h2 class="layout-title">imooc-admin</h2>

    <!-- 左边菜单 子组件 -->
    <MenuTree :tree="menuList"></MenuTree>

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
