import axios from "./config";
import {
  QueryParams,
  CookList,
  CookItem,
  CookType,
  Express,
  QuestionAnswer,
  Driving,
  DrivingQuery,
  WeatherInfo,
} from "@/types/api";

/**
 * 搜索菜谱
 * @param query
 */
export const cookSearch = (query: QueryParams) => {
  return axios.post<CookList>("/recipe/search", { params: query });
};

/**
 * 菜谱分类
 */
export const getCookCategory = () => {
  return axios.get<CookType[]>("/recipe/class");
};

/**
 * 通过分类获取菜谱列表
 * @param classid 分类id
 * @param start 跳过start条 默认0 用户计算分页
 * @param num 每页条数
 */
export const getCooksListByCategoryId = (
  classid: number,
  start = 0,
  num = 10
) => {
  return axios.post<CookList>("/recipe/byclass", {
    params: {
      classid,
      start,
      num,
    },
  });
};

/**
 * 获取菜谱详情
 * @param id
 */
export const getCooksInfo = (id: number) => {
  return axios.post<CookItem>("/recipe/detail", { params: { id } });
};

/**
 * 查快递
 * @param number 订单号
 * @param mobile 手机号 顺丰需要
 */
export const findExpress = (number: number, mobile?: number) => {
  return axios.post<Express>("/express/query", {
    params: {
      type: "auto",
      number,
      mobile,
    },
  });
};

/**
 * 问答回答
 * @param question 问题内容
 */
export const askQuestion = (question: string) => {
  return axios.post<QuestionAnswer>("/iqa/query", { params: { question } });
};

/**
 * 获取驾照考题
 * @param query
 */
export const getDrivingLicenseQuestion = (
  query: Partial<DrivingQuery> = {
    type: "C1",
    subject: 1,
    pagesize: 1,
    pagenum: 1,
    sort: "rand",
    chapter: 1,
  }
) => {
  return axios.post<Driving>("/driverexam/query", { params: query });
};

/**
 * 天气信息
 * TODO 城市id先写死
 */
export const getWeatherInfo = () => {
  return axios.post<WeatherInfo>("/weather/query", {
    params: {
      cityid: 3232,
    },
    header: { toast: false },
  });
};
