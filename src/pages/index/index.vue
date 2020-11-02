<template>
  <view :class="['page-home-wrap', {'opened': menuOpen}]">
    <view :class="['weather-info weather', pageBg]">
      <view class="weather-triangle"></view>
      <!-- <view class="weather-title">{{weather.weather}}</view> -->
      <view class="weather-area">{{weather.city}}</view>
      <view class="weather-temperature">{{weather.temperature}}℃</view>
      <view class="weather-icon"
            v-if="weather.icon">
        <weather-icon-wrap :icon="weather.icon" />
      </view>
      <view class="weather-dress-recommend"
            v-if="weather_dress_rec">
        <text class="weather-dress-title">{{weather_dress_rec.iname}}</text>
        <text>{{weather_dress_rec.detail}}</text>
      </view>
      <view class="today">
        <view>今天是周五吗</view>
        <view class="today-text">{{dayText}}</view>
      </view>
      <view class="menu-btn shadow bg-black"
            @tap="menuOpen = true">
        <text class="cuIcon-apps"></text>
      </view>
    </view>
    <view class="weather-future-wrap">
      <view class="weather-future-item"
            v-for="future in weather.daily"
            :key="future.date">
        <text>{{future.week}}</text>
        <weather-icon-wrap size="120"
                           :icon="future.icon" />
        <text>{{future.temperature}}℃</text>
      </view>
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

import WeatherIconWrap from "@/components/weather-icon/index.vue";

import { getWeatherInfo } from "@/api";
import { isFridayToday } from "@/helper";
import { formatWeatherInfo } from "@/helper/format";
import { NavList } from "@/helper/page-config";
import { AppData } from "@/types/app";

const Index = defineComponent({
  components: {
    WeatherIconWrap,
  },
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
      weather_dress_rec: {},
    });

    // 天气
    getWeatherInfo().then(({ result }) => {
      let weather = formatWeatherInfo(result);
      data.weather = weather;
      data.weather_dress_rec = weather.index[0];
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