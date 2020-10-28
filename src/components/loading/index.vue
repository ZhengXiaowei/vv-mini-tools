<template>
  <view class="loading-wrap">
    <view class="loading-grid">
      <view class="loading-cube loading-cube1"></view>
      <view class="loading-cube loading-cube2"></view>
      <view class="loading-cube loading-cube3"></view>
      <view class="loading-cube loading-cube4"></view>
      <view class="loading-cube loading-cube5"></view>
      <view class="loading-cube loading-cube6"></view>
      <view class="loading-cube loading-cube7"></view>
      <view class="loading-cube loading-cube8"></view>
      <view class="loading-cube loading-cube9"></view>
    </view>
    <text class="loading-text">{{text}}</text>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const loadingComponent = defineComponent({
  props: {
    text: {
      type: String,
      default: "别急啊，已经在很努力的在加载了...",
    },
  },
});

export default loadingComponent;
</script>