<template>
  <app-navigation is-custom>
    <template v-slot:content>
      <text>加油吧骚年</text>
    </template>
  </app-navigation>
  <view class="page-driving-question-wrap">
    <image v-if="question.pic"
           :src="question.pic" />
    <view class="cu-bar bg-white solid-bottom question-title">
      <view class="action">
        <text class="cuIcon-titles text-orange"></text>
        {{question.question}}
      </view>
    </view>
    <view class="cu-card">
      <radio-group class="block shadow cu-item"
                   @change="onRadioChange">
        <view class="option-item"
              v-for="option in question.options"
              :key="option.value">
          <radio class="blue radio"
                 :value="option.value"></radio>
          <view class="title">{{option.label}}</view>
        </view>
      </radio-group>
    </view>
    <view class="cu-bar btn-group margin-top-sm">
      <button class="cu-btn bg-blue shadow-blur round lg"
              @tap="onConfirm">
        {{ showAnswer ? '下一题' : '提交答案'}}
      </button>
    </view>
    <view class="cu-card answer-wrap"
          v-show="showAnswer">
      <view class="cu-item shadow">
        <view :class="['answer-item answer-status', success ? 'success' : 'error']">
          <text>答案:</text>
          <text>{{question.answer}}</text>
        </view>
        <view class="answer-item answer-type">
          <text>驾考类型: </text>
          <text>{{question.type}}</text>
        </view>
        <view class="answer-item answer-explain">
          <text>解析: </text>
          <text>{{question.explain}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, reactive, toRefs, ref, computed } from "vue";
import { useStore } from "vuex";

import AppNavigation from "@/components/custom/index.vue";

import { getDrivingLicenseQuestion } from "@/api";
import { formatDrivingQuestion } from "@/helper/format";
import { DrivingQuestion } from "@/types/api";

const Driving = defineComponent({
  components: {
    AppNavigation,
  },
  setup() {
    const store = useStore();

    const data = reactive({
      answer: "",
      showAnswer: false,
      success: false,
      question: ref<Partial<DrivingQuestion>>({}),
      page: computed(() => store.getters["driving/page"]),
      page2: computed(() => store.getters["driving/page2"]),
      type: computed(() => store.getters["driving/type"]),
    });

    const page = data.type === 1 ? data.page : data.page2;

    getDrivingLicenseQuestion({ pagenum: page, subject: data.type }).then(
      ({ result }) => {
        data.question = formatDrivingQuestion(result.list)[0];
      }
    );

    const onRadioChange = (info: any) => {
      data.answer = info.detail.value;
    };

    const onConfirm = () => {
      if (data.showAnswer) {
        const next_page = data.page + 1;
        store.dispatch("driving/save", next_page);

        return Taro.redirectTo({
          url: "../driving-question-bank/index?id=" + next_page,
        });
      }
      if (!data.answer)
        return Taro.showToast({
          title: "不选答案，好意思提交？",
          icon: "none",
        });
      data.success = data.answer === data.question.answer;
      data.showAnswer = true;
    };

    return {
      ...toRefs(data),
      onConfirm,
      onRadioChange,
    };
  },
});

export default Driving;
</script>

