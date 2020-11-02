<template>
  <view class="weather-icon-wrap"
        :style="iconStyle"></view>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import { isNumberType } from "@/helper/utils";

const WeatherIconWrap = defineComponent({
  props: {
    size: {
      type: [Number, String],
      default: 320,
    },
    scale: {
      type: [Number, String],
      default: 2,
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
      backgroundSize: `${+props.scale * 100}%`,
      backgroundImage: `url(${props.icon})`,
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
  background-repeat: no-repeat;
  background-position: center;
}
</style>