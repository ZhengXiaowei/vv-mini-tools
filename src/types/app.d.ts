import Taro from "@tarojs/taro";

export interface AppData {
  isNight: boolean;
  StatusBar: number;
  Custom: Taro.getMenuButtonBoundingClientRect.Rect | null;
  CustomBar: number;
}
