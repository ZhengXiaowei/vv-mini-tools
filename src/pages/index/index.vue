<template>
  <view class="page-home-wrap">
    <view :class="['weather-info weather', pageBg]">
      <view class="weather-triangle"></view>
      <view class="weather-title">{{weather.weather}}</view>
      <view class="weather-area"
            :style="areaStyle">{{weather.city}}</view>
      <view class="weather-temperature">{{weather.temperature_lower}}℃ - {{weather.temperature_high}}℃</view>
      <view class="today">
        <view>今天是周五吗</view>
        <view class="today-text">{{dayText}}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs } from "vue";

import { isFridayToday } from "@/helper";
import { formatWeatherInfo } from "@/helper/format";
import { getWeatherInfo } from "@/api";
import { AppData } from "@/types/app";

const Index = defineComponent({
  setup() {
    const app = inject<AppData>("app");

    const data = reactive({
      areaStyle: {
        top: `${app?.StatusBar}px`,
        height: `${app?.CustomBar}rpx`,
      },
      pageBg: app?.isNight ? "night" : "light",
      dayText: isFridayToday(),
      weather: {},
    });

    // 天气
    getWeatherInfo().then(({ result }) => {
      let weather = formatWeatherInfo(result, 3);
      data.weather = weather;
    });

    return {
      ...toRefs(data),
    };
  },
});

export default Index;
</script>

