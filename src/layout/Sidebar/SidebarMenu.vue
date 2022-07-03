<template>
  <div class="menu-conten">
    <el-menu
      active-text-color="#fff"
      background-color="#304156"
      default-active="/profile"
      text-color="#bfcbd9"
      unique-opened
      router
    >
      <!-- 子组件 -->
      <MenuItem
        v-for="item in menuList"
        :key="item"
        :menuList="item"
      ></MenuItem>
    </el-menu>

    <!-- <template v-if="props.data && !props.data.children">
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
        递归
        <SidebarMenu
          v-for="item in props.data.children"
          :key="item"
          :data="item"
        ></SidebarMenu>
      </el-sub-menu>
    </template> -->
  </div>
</template>
<script setup>
// 子组件
import MenuItem from './MenuItem'
// 导出 处理菜单数据的方法
import { filterMenuDate } from '../../utils/menu'
import { reactive } from 'vue'
/**
 * 定义菜单数据
 * 递归组件渲染
 * 获取路由数据 router.getRoutes()
 * 在渲染最终数据 有children 用el-sub-menu  没children  用el-menu-item
 */
const data = [
  {
    path: '/profile', // 个人中心
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user', // 用户
    name: 'user',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage', // 员工管理
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role', // 角色管理
        name: 'userRole',
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/user/permission', // 权限列表
        name: 'userpermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article', // 文章
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking', // 文章排名
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create', // 创建文章
        name: 'articleCreate',
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      }
    ]
  }
]
filterMenuDate(data)
const menuList = reactive(data)
// import { defineProps } from 'vue'
// const props = defineProps({
//   data: {
//     type: Object,
//     default: () => {}
//   }
// })
</script>
<style lang="scss" scoped></style>
