import Taro from "@tarojs/taro";
import store from "@/store";
import { WeekText } from "./enum";

/**
 * 判断请求接口是否命中缓存
 * @param config 请求配置
 */
let resTarget: any = null;
export const hitApiCache = (config: Taro.RequestParams) => {
  if (config.header?.use) {
    const urlKey: string = config.url;
    resTarget = store.state.system.cache.get(urlKey) || null;
    // 命中缓存，直接返回
    return resTarget;
  }
};

/**
 * api 结果缓存
 * @param data 缓存数据
 * @param config 请求配置
 */
export const resCache = (data: any, config: Taro.RequestParams) => {
  if (config.header?.use) {
    const urlKey: string = config.url;
    resTarget ?? store.state.system.cache.put(urlKey, data);
  }
};

/**
 * 今天是周五吗？
 */

export const isFridayToday = (): string => {
  const weekDay = new Date().getDay();
  return WeekText[`周${weekDay}`];
};

/**
 * 判断是否处于晚上
 */
export const isNight = (): boolean => {
  const hour = new Date().getHours();
  let is_night = true;
  if (hour > 6 && hour < 18) is_night = false;
  return is_night;
};
