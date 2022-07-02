<template>
  <div class="menu-conten">
    <!-- :default-active="$router.path" -->
    <el-menu
      active-text-color="#fff"
      background-color="#304157"
      default-active="/profile"
      text-color="#fff"
      unique-opened
      router
    >
      <template v-for="(item, index) in item.children" :key="item">
        <template v-if="item && !item.children">
          <el-menu-item :index="item.path">
            <el-icon>
              <svg-icon icon="personnel"></svg-icon>
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
        <template v-if="item && item.children && item.children.length > 0">
          <el-sub-menu :index="index">
            <template #title>
              <el-icon>
                <svg-icon icon="article"></svg-icon>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
          </el-sub-menu>
        </template>
      </template>
      <!-- <el-menu-item index="/chart">
        <el-icon>
          <svg-icon icon="article-ranking"></svg-icon>
        </el-icon>
        <span>数据可视化</span>
      </el-menu-item>
      <el-sub-menu index="/profile">
        <template #title>
          <el-icon><svg-icon icon="personnel"></svg-icon></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/manage">
            <el-icon>
              <svg-icon icon="personnel-manage"></svg-icon>
            </el-icon>
            员工管理
          </el-menu-item>
          <el-menu-item index="/user/role">
            <el-icon>
              <svg-icon icon="role"></svg-icon>
            </el-icon>
            角色列表
          </el-menu-item>
          <el-menu-item index="/user/permission">
            <el-icon>
              <svg-icon icon="permission"></svg-icon>
            </el-icon>
            权限列表
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="/article">
        <template #title>
          <el-icon>
            <svg-icon icon="article"></svg-icon>
          </el-icon>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/article/ranking">
            <el-icon> <svg-icon icon="article-ranking"></svg-icon></el-icon>
            文章排名
          </el-menu-item>
          <el-menu-item index="/article/create">
            <el-icon> <svg-icon icon="article-create"></svg-icon></el-icon>
            创建文章
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>
<script setup>
// import { reactive } from 'vue'
// import { defineProps } from 'vue'
// const props = reactive({
//   item: {
//     type: Object,
//     default: () => {}
//   }
// })
</script>
// const data = reactive(menuList)
<style lang="scss" scoped></style>
