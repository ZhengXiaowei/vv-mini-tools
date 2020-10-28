<template>
  <view class="page-home-wrap">
    <view class="is-friday">
      <text class="question">今天是周五吗</text>
      <view class="answer">
        <text v-for="text in todayText"
              :key="text">{{text}}</text>
      </view>
    </view>
    <view class="nav-wrap">
      <view class="nav-item"
            v-for="menu in menus"
            :key="menu.path"
            @tap="doNavigator(menu.path)">
        <image :src="menu.icon" />
        <view>{{menu.title}}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, reactive, toRefs } from "vue";

import { isFridayToday } from "@/helper";

const Index = defineComponent({
  setup() {
    const text = isFridayToday().split("\n");
    const data = reactive({
      todayText: text,
      menus: [
        {
          title: "找找今天能吃什么",
          icon: require("@/assets/icon-cook.png"),
          path: "../cook/index",
        },
        {
          title: "我的快递到哪儿了",
          icon: require("@/assets/icon-express.png"),
          path: "../express/index",
        },
        {
          title: "多大了驾照还没考",
          icon: require("@/assets/icon-car.png"),
          path: "../driving/index",
        },
        {
          title: "小vv的私人助理",
          icon: require("@/assets/icon-answer.png"),
          path: "../ai/index",
        },
      ],
    });

    const doNavigator = (path: string) => {
      Taro.navigateTo({ url: path });
    };

    return {
      ...toRefs(data),
      doNavigator,
    };
  },
});

export default Index;
</script>

