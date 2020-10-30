<template>
  <view :class="['page-home-wrap', {'opened': menuOpen}]">
    <view :class="['weather-info weather', pageBg]">
      <view class="weather-triangle"></view>
      <view class="weather-title">{{weather.weather}}</view>
      <view class="weather-area"
            :style="areaStyle">{{weather.city}}</view>
      <view class="weather-temperature">{{weather.temperature}}℃</view>
      <view class="today">
        <view>今天是周五吗</view>
        <view class="today-text">{{dayText}}</view>
      </view>
      <view class="menu-btn"
            @tap="menuOpen = true">+</view>
    </view>
  </view>
  <view :class="['page-menu-close', {'opened': menuOpen}]"
        @tap="menuOpen = false"></view>
  <view :class="['page-menu-wrap', {'opened': menuOpen}]"
        :style="{paddingTop: areaStyle.top}">
    <view class="menu-content">
      <view class="menu-item"
            v-for="menu in nav"
            :key="menu.path"
            @tap="onNavigationTap(menu.path)">
        <image :src="menu.icon" />
        <view>{{menu.title}}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, inject, reactive, toRefs } from "vue";

import { isFridayToday } from "@/helper";
import { formatWeatherInfo } from "@/helper/format";
import { NavList } from "@/helper/page-config";
import { getWeatherInfo } from "@/api";
import { AppData } from "@/types/app";

const Index = defineComponent({
  setup() {
    const app = inject<AppData>("app");

    const data = reactive({
      nav: NavList,
      areaStyle: {
        top: `${app?.StatusBar}px`,
        height: `${app?.CustomBar}rpx`,
      },
      pageBg: app?.isNight ? "night" : "light",
      dayText: isFridayToday(),
      menuOpen: false,
      weather: {},
    });

    // 天气
    getWeatherInfo().then(({ result }) => {
      let weather = formatWeatherInfo(result, 3);
      data.weather = weather;
    });

    // 导航
    const onNavigationTap = (path: string) => {
      data.menuOpen = false;
      setTimeout(() => {
        Taro.navigateTo({ url: path });
      }, 500);
    };

    return {
      ...toRefs(data),
      onNavigationTap,
    };
  },
});

export default Index;
</script>

<style lang="scss">
page {
  background: linear-gradient(45deg, #0081ff, #1cbbb4);
  overflow: hidden;
}
</style>