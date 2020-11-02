<template>
  <app-navigation is-custom />
  <view class="page-cook-wrap">
    cook page
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppNavigation from "@/components/custom/index.vue";

const Cook = defineComponent({
  components: {
    AppNavigation,
  },
  setup() {
    return {};
  },
});

export default Cook;
</script>

