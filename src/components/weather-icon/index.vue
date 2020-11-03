<template>
  <view class="weather-icon-wrap">
    <image :src="icon"
           :style="iconStyle" />
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import { isNumberType } from "@/helper/utils";

const WeatherIconWrap = defineComponent({
  props: {
    size: {
      type: [Number, String],
      default: 350,
    },
    night: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isNumberSize = isNumberType(props.size);

    const iconStyle = reactive({
      width: isNumberSize ? `${props.size}rpx` : props.size,
      height: isNumberSize ? `${props.size}rpx` : props.size,
    });

    return {
      iconStyle,
    };
  },
});

export default WeatherIconWrap;
</script>

<style lang="scss">
.weather-icon-wrap {
  font-size: 0;
}
</style>