<template>
  <div class="meun">
    <!-- {{props.dataSon.children}} -->
    <!-- 对象不能循环 少一层 没效果 -->
    <!-- 递归  自己调用自己 -->
    <ul>
      <li>
        {{ props.dataSon.name }}
        <!-- 判断有没有数据、判断有没有子元素、判断子元素的疮毒大于零 -->
        <template
          v-if="
            props.dataSon &&
            props.dataSon.children &&
            props.dataSon.children.length > 0
          "
        >
        <!-- 调用自己要穿 数据 :dataSon="item"   不然接收不到不会循环 -->
          <Item
            v-for="(item, index) in props.dataSon.children"
            :key="index"
            :dataSon="item"
          >
          </Item>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup>
// 接收父组件的值
import { defineProps } from 'vue'
// 重新赋值
const props = defineProps({
  dataSon: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
