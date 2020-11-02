import { inject } from "vue";
import { ExpressItem, WeatherDailyInfo, WeatherInfo } from "@/types/api";
import { WeatherIcon } from "./enum";
import { isDate, isObject } from "./utils";
import { AppData } from "@/types/app";

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
export const formatWeatherInfo = (weather: WeatherInfo, night = false) => {
  const weather_icon_prefix = "weather_icon_";

  return {
    weather: weather.weather,
    date: weather.date,
    city: weather.city,
    week: weather.week,
    icon: WeatherIcon[weather_icon_prefix + weather.img],
    temperature: weather.temp,
    temperature_high: weather.temphigh,
    temperature_lower: weather.templow,
    humidity: weather.humidity,
    index: weather.index.slice(weather.index.length - 1),
    daily: weather.daily
      .slice(1, 7)
      .map((day) => formatWeatherDailyInfo(day, night)),
  };
};

const formatWeatherDailyInfo = (daily: WeatherDailyInfo, night = false) => {
  const weather_icon_prefix = "weather_icon_";

  let icon = WeatherIcon[weather_icon_prefix + daily.day.img];
  let temp = daily.day.temphigh;

  if (night) {
    icon = WeatherIcon[weather_icon_prefix + daily.night.img];
    temp = daily.night.templow;
  }

  return {
    date: daily.date,
    week: daily.week,
    icon: icon,
    temperature: temp,
  };
};

/**
 * 格式化快递接口数据
 * @param progress
 */
export const formatExpressProgressList = (progress: ExpressItem[]) => {
  const new_progress = progress.slice(0);
  new_progress.forEach((p) => {
    const date = p.time!.split(" ");
    const year = date[0].split("-")[0];
    const month = date[0].split("-").slice(1).join("-");
    const time_info = date[1];
    p.date = date[0];
    p.year = year;
    p.month = month;
    p.time_info = time_info;
  });

  // 分组数据
  const groupResult = groupArrayByName<ExpressItem>(new_progress, (item) => [
    item.date,
  ]);

  // 再做一次格式化 把二维数组转换成一维数组
  const result = groupResult.map((gr) => {
    const first = gr[0];
    return {
      year: first.year,
      month: first.month,
      children: gr,
    };
  });

  return result;
};

/**
 * 通过指定name分组数组
 * @param arr
 * @param fn
 */
const groupArrayByName = <T>(arr: T[], fn: Function) => {
  const groups = {};
  arr.forEach(function (o) {
    const group = JSON.stringify(fn(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function (group) {
    return groups[group];
  });
};
