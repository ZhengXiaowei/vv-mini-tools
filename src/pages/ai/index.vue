<template>
  <app-navigation class="fix-custom"
                  is-custom
                  bg-color="" />
  <view class="page-ai-wrap bg-gradual-blue">
    <text class="start-notice">想问什么就问什么吧，反正我也不知道我知道什么</text>
    <image src="http://normal-image.xiaovv-web.com/normal/2020-11-03-wave.gif"
           mode="scaleToFill"
           class="gif-wave" />
  </view>
  <view :class="['page-ai-start-bg', {'is-active': inRecording}]">
    <view class="top-line bg-gradual-pink"></view>
    <view class="bottom-line bg-gradual-pink"></view>
    <loading-circle class="in-progress-loading" />
  </view>
  <view :class="['page-ai-voice shadow bg-gradual-blue', {'button-hover': inRecording}]"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd">
    <text class="cuIcon-voice" />
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

import AppNavigation from "@/components/custom/index.vue";
import LoadingCircle from "@/components/loading/loading-circle.vue";

const Ai = defineComponent({
  components: {
    AppNavigation,
    LoadingCircle,
  },
  setup() {
    const data = reactive({
      inRecording: false,
    });

    const onTouchStart = () => {
      data.inRecording = true;
    };

    const onTouchEnd = () => {
      data.inRecording = false;
    };

    return {
      ...toRefs(data),
      onTouchStart,
      onTouchEnd,
    };
  },
});

export default Ai;
</script>

<style lang="scss">
page {
  background: #fff;
}
</style>