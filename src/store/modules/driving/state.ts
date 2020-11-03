import Taro from "@tarojs/taro";
import { IDrivingState } from "src/types/store";

const state: IDrivingState = {
  page: Taro.getStorageSync("page") || 1,
  page_2: Taro.getStorageSync("page_2") || 1,
  type: 1,
};

export default state;
