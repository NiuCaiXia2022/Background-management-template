<template>
  <div class="meun">
    <!-- {{props.data}} -->
    <Item  v-for="(item, index) in props.data" :key="index"  :dataSon="item">
    </Item>
  </div>
</template>
<script setup>
import Item from './Item'
// 接收父组件的值
import { defineProps } from 'vue'
// 重新赋值
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
