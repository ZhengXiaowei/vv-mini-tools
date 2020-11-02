<template>
  <app-navigation is-custom
                  bg-color="bg-gradual-blue" />
  <view class="page-express-wrap">
    <view class="cu-form-group">
      <input type="text"
             placeholder="请填写运单号">
    </view>
    <view class="cu-form-group">
      <input type="number"
             placeholder="请填写手机号，顺丰必填，其他选填">
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
  <scroll-view class="page-express-progress margin-top-sm"
               :scroll-y="true"
               :style="scrollStyle">
    <view v-if="loading"
          class="cu-load loading loading-wrap"></view>
    <!-- TODO 有待调整 卡片形式 -->
    <view class="express-name">
      <image :src="expresses.logo" />
      <text>{{expresses.typename}}</text>
    </view>
    <view class="progress-list cu-timeline"
          v-for="(express, i) in expresses.list"
          :key="i">
      <view class="cu-time cu-time-wrap">
        <text>{{express.year}}</text>
        <text>{{express.month}}</text>
      </view>
      <view class="cu-item text-grey"
            v-for="(content, k) in express.children"
            :key="k">
        <view class="content bg-grey shadow-blur">
          <text>{{content.time_info}}</text> {{content.status}}
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
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
      scrollStyle: {
        height: `calc(80vh - ${app?.CustomBar}px - 20rpx)`,
      },
      expresses: {},
    });

    const onExpressSearch = () => {
      if (data.loading) return;
      data.loading = true;
      findExpress("SF9600130113284", "18668052463").then(({ result }) => {
        result.list = formatExpressProgressList(result.list);
        data.expresses = result;
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

