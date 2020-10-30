import { WeatherInfo } from "@/types/api";
import { isDate, isObject } from "./utils";

const encode = (value: string): string => {
  return encodeURIComponent(value)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
};

export const formatURL = (url: string, params?: any): string => {
  // * 如果没有传参数 则直接返回url即可
  if (!params) return url;
  // * 遍历params
  let parts: string[] = [];
  Object.keys(params).forEach((key) => {
    let val = params[key];
    // * 如果参数不存在则直接跳过
    if (val === null) return;

    let pValues: string[];

    // * 是数组 直接赋值 不是数组变成数组 统一处理
    if (Array.isArray(val)) {
      pValues = val;
      key += "[]";
    } else pValues = [val];

    pValues.forEach((v) => {
      if (isDate(v)) v = v.toISOString();
      else if (isObject(v)) v = JSON.stringify(v);
      parts.push(`${encode(key)}=${encode(v)}`);
    });
  });

  // * 处理参数集合
  let serialization = parts.join("&");
  if (serialization) {
    // * 如果url带有hash
    let index = url.indexOf("#");
    if (index !== -1) url = url.slice(0, index);

    url += (url.indexOf("?") !== -1 ? "&" : "?") + serialization;
  }
  return url;
};

/**
 * 格式化天气数据
 * @param weather 天气信息
 * @param future 未来几天
 */
export const formatWeatherInfo = (weather: WeatherInfo, future: number = 7) => {
  return {
    weather: weather.weather,
    date: weather.date,
    city: weather.city,
    week: weather.week,
    icon: weather.img,
    temperature: weather.temp,
    temperature_high: weather.temphigh,
    temperature_lower: weather.templow,
    humidity: weather.humidity,
    daily: weather.daily.slice(1, future + 1),
  };
};
