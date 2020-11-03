<template>
  <view class="cu-custom"
        :style="{height: style.height}">
    <view :class="['cu-bar fixed', style.barClass, bgColor]"
          :style="style.barStyle">
      <view class="action"
            v-if="isBack"
            @tap="onBackTap">
        <text class="cuIcon-back"></text>
        <slot name="backText"></slot>
      </view>
      <view class="action border-custom"
            v-if="isCustom"
            :style="style.actionStyle">
        <text class="cuIcon-back"
              @tap="onBackTap"></text>
        <text class="cuIcon-homefill"
              @tap="onHomeTap"></text>
      </view>
      <view class="content"
            :style="{top: style.top, fontSize: '26rpx'}">
        <slot name="content"></slot>
      </view>
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, inject, reactive, toRefs } from "vue";

import { AppData } from "@/types/app";

const AppNavigation = defineComponent({
  props: {
    bgColor: {
      type: String,
      default: "bg-gradual-blue",
    },
    isCustom: {
      type: [Boolean, String],
      default: false,
    },
    isBack: {
      type: [Boolean, String],
      default: false,
    },
    bgImage: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const app = inject<AppData>("app");
    const data = reactive({
      style: {
        height: `${app?.CustomBar}px`,
        top: `${app?.StatusBar}px`,
        barClass: props.bgImage ? "none-bg text-white bg-img" : "",
        barStyle: {
          height: `${app?.CustomBar}px`,
          paddingTop: `${app?.StatusBar}px`,
          backgroundImage: props.bgImage ? `url(${props.bgImage})` : "",
        },
        actionStyle: {
          width: `${app?.Custom?.width}px`,
          height: `${app?.Custom?.height}px`,
          marginLeft: `calc(750rpx - ${app?.Custom?.right}px)`,
        },
      },
    });

    const onBackTap = () => {
      Taro.navigateBack({ delta: 1 });
    };

    const onHomeTap = () => {
      Taro.reLaunch({ url: "../index/index" });
    };

    return {
      ...toRefs(data),
      onBackTap,
      onHomeTap,
    };
  },
});

export default AppNavigation;
</script>