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
  </div>
</template>
<script setup>
// 子组件
import MenuItem from './MenuItem'
// 导出 处理菜单数据的方法
import { filterMenuDate } from '../../utils/menu'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// 路由处理的方法 filterRouters(所有一级路由+登录)  getMenu(菜单的一级路由)
import { filterRouters, getMenu } from '../../utils/router'

const router = useRouter()
// console.log(router.getRoutes()) // 获取所有路由信息 // router.addRoute 动态添加路由
// 处理路由数据调用方法  filterRouters(所有一级路由+登录)
// const routes = filterRouters(router.getRoutes())
// getMenu(菜单的一级路由) 处理路由数据  调用方法
// getMenu(routes)

// 动态路由
const menuList = computed(() => {
  // 所有路由
  const routes = filterRouters(router.getRoutes())
  // filterMenuDate 路由处理的方法  getMenu(routes)  getMenu(菜单的一级路由)
  return filterMenuDate(getMenu(routes))
})

/**
 * 定义菜单数据
 * 递归组件渲染
 * 获取路由数据 router.getRoutes()
 * 在渲染最终数据 有children 用el-sub-menu  没children  用el-menu-item
 */
// const data = [
//   {
//     path: '/profile', // 个人中心
//     name: 'profile',
//     meta: {
//       title: '个人中心',
//       icon: 'personnel'
//     },
//     children: []
//   },
//   {
//     path: '/user', // 用户
//     name: 'user',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage', // 员工管理
//         name: 'userManage',
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         },
//         children: []
//       },
//       {
//         path: '/user/role', // 角色管理
//         name: 'userRole',
//         meta: {
//           title: '角色管理',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission', // 权限列表
//         name: 'userpermission',
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       }
//     ]
//   },
//   {
//     path: '/article', // 文章
//     redirect: '/article/ranking',
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     children: [
//       {
//         path: '/article/ranking', // 文章排名
//         name: 'articleRanking',
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create', // 创建文章
//         name: 'articleCreate',
//         meta: {
//           title: '创建文章',
//           icon: 'article-create'
//         }
//       }
//     ]
//   }
// ]
// 处理菜单数据  调用方法
// filterMenuDate(data)
// 子组件循环
// const menuList = reactive(data)
</script>
<style lang="scss" scoped></style>
