<template>
  <div class="menu-conten">
    <!-- 递归练习 -->
    <MenuTree :data="data"></MenuTree>
  </div>
</template>
<script setup>
import MenuTree from './MenuTree'
const data = [
  {
    id: 1,
    name: '一层',
    children: [
      {
        id: 11,
        name: '一一层',
        children: [
          {
            id: 11,
            name: '一一一层'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '二层',
    children: [
      {
        id: 22,
        name: '二二层',
        children: [
          {
            id: 222,
            name: '二二二层',
            children: [
              {
                id: 2222,
                name: '二二二二层'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '三层'
  },
  {
    id: 4,
    name: '四层'
  }
]
</script>
<style lang="scss" scoped></style>
