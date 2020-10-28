import Taro from "@tarojs/taro";
import { ref, watch } from "vue";

/**
 * 动画hooks
 * @param duration
 * @param timingFunction
 * @param delay
 */
const useAnimation = (
  duration: number = 500,
  timingFunction: keyof Taro.createAnimation.timingFunction = "ease",
  delay: number = 0
) => {
  let animationData = ref({});
  let inAnimation = ref(false);
  const animation = Taro.createAnimation({
    duration,
    timingFunction,
    delay,
  });

  // 监听一个中间变量 用于改变animationData
  watch(inAnimation, (in_animation) => {
    if (in_animation) animationData.value = animation.export();
    inAnimation.value = false;
  });

  return { animation, animationData, inAnimation };
};

export default useAnimation;
