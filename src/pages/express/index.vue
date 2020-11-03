<template>
  <app-navigation is-custom
                  bg-color="bg-gradual-blue" />
  <view class="page-express-wrap">
    <view class="cu-form-group">
      <input type="text"
             placeholder="请填写运单号"
             v-model="number">
    </view>
    <view class="cu-form-group">
      <input type="number"
             placeholder="请填写手机号，顺丰必填，其他选填"
             v-model="phone">
    </view>
    <view class="cu-bar btn-group margin-top-sm">
      <button class="cu-btn bg-blue shadow-blur round lg"
              @tap="onExpressSearch">
        <text v-if="loading"
              class="cuIcon-loading2 iconfont-spin margin-right-xs" />
        查查包裹去哪儿了
      </button>
    </view>
  </view>
  <!-- TODO 有待调整 卡片形式 -->
  <view class="page-express-name shadow bg-white"
        v-if="expresses.typename">
    <image :src="expresses.logo" />
    <view class="express-info">
      <text class="name">{{expresses.typename}}</text>
      <text class="number">{{expresses.number}}</text>
    </view>
  </view>
  <scroll-view class="page-express-progress margin-top-sm"
               :scroll-y="true"
               :style="scrollStyle">
    <view v-if="loading"
          class="cu-load loading loading-wrap"></view>
    <block v-if="!errorResult">
      <view class="progress-list cu-timeline"
            v-for="(express, i) in expresses.list"
            :key="i">
        <view class="cu-time cu-time-wrap">
          <text>{{express.year}}</text>
          <text>{{express.month}}</text>
        </view>
        <view class="cu-item text-grey cuIcon-deliver_fill"
              v-for="(content, k) in express.children"
              :key="k">
          <view class="content bg-grey shadow-blur">
            <text>{{content.time_info}}</text> {{content.status}}
          </view>
        </view>
      </view>
    </block>
    <view class="result-not-found shadow bg-white"
          v-else>
      <image src="http://normal-image.xiaovv-web.com/normal/2020-11-03-page-not-found.png" />
      <text>{{errorText}}</text>
      <text>顺丰记得要填手机号才能查到哟</text>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, inject, reactive, toRefs } from "vue";

import AppNavigation from "@/components/custom/index.vue";

import { findExpress } from "@/api";
import { formatExpressProgressList } from "@/helper/format";
import { AppData } from "@/types/app";

const Express = defineComponent({
  components: {
    AppNavigation,
  },
  setup() {
    const app = inject<AppData>("app");
    const data = reactive({
      loading: false,
      errorResult: false,
      errorText: "",
      scrollStyle: {
        height: `calc(80vh - ${app?.CustomBar}px - 180rpx)`,
      },
      number: "",
      phone: "",
      expresses: {},
    });

    const onExpressSearch = () => {
      if (data.loading) return;

      if (!data.number)
        return Taro.showToast({ title: "运单不填你让我查啥？", icon: "none" });

      if (data.phone) {
        const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (!phoneReg.test(data.phone))
          return Taro.showToast({
            title: "手机别瞎填，系统会验证",
            icon: "none",
          });
      }

      data.loading = true;
      findExpress(data.number, data.phone).then(({ result, msg }) => {
        if (result) {
          result.list = formatExpressProgressList(result.list);
          data.expresses = result;
        } else {
          data.errorResult = true;
          data.errorText = msg;
        }
        data.loading = false;
      });
    };

    return {
      ...toRefs(data),
      onExpressSearch,
    };
  },
});

export default Express;
</script>

