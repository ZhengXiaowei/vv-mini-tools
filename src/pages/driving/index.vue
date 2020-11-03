<template>
  <app-navigation is-custom>
    <template v-slot:content>
      <text>多大人了驾照都还没考</text>
    </template>
  </app-navigation>
  <view class="page-driving-wrap">
    <view class="driving-type">
      <image src="http://normal-image.xiaovv-web.com/normal/2020-11-03-one.png" />
      <text class="name">科目一</text>
      <view class="cu-bar btn-group margin-top-sm">
        <button class="cu-btn bg-blue shadow-blur round lg"
                @tap="onStart(1)">
          {{page !== 1 ? "继续答题" : "开始答题"}}
        </button>
        <button class="cu-btn bg-pink shadow-blur round lg"
                v-if="page !== 1"
                @tap="onRestart(1)">
          重新开始
        </button>
      </view>
    </view>
    <view class="driving-type">
      <image src="http://normal-image.xiaovv-web.com/normal/2020-11-03-two.png" />
      <text class="name">科目四</text>
      <view class="cu-bar btn-group margin-top-sm">
        <button class="cu-btn bg-blue shadow-blur round lg"
                @tap="onStart(4)">
          {{page2 !== 1 ? "继续答题" : "开始答题"}}
        </button>
        <button class="cu-btn bg-pink shadow-blur round lg"
                v-if="page2 !== 1"
                @tap="onRestart(4)">
          重新开始
        </button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

import AppNavigation from "@/components/custom/index.vue";

import { useStore } from "vuex";
import Taro from "@tarojs/taro";

const Driving = defineComponent({
  components: {
    AppNavigation,
  },
  setup() {
    const store = useStore();

    const data = reactive({
      page: computed(() => store.getters["driving/page"]),
      page2: computed(() => store.getters["driving/page2"]),
    });

    const onStart = (type: number) => {
      store.commit("driving/ON_TYPE_CHANGE", type);
      const page = type === 1 ? data.page : data.page2;
      Taro.navigateTo({ url: "../driving-question-bank/index?id=" + page });
    };

    const onRestart = (type: number) => {
      Taro.navigateTo({
        url: "../driving-question-bank/index?id=1",
        success: () => {
          if (type === 1) store.dispatch("driving/save", 1);
          else store.dispatch("driving/save2", 1);
        },
      });
    };

    return {
      onStart,
      onRestart,
      ...toRefs(data),
    };
  },
});

export default Driving;
</script>

