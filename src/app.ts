import Taro from "@tarojs/taro";
import { createApp } from "vue";
import store from "./store";

import { isNight } from "./helper/index";
import { AppData } from "./types/app";

import "./colorui/main.scss";
import "./colorui/icon.scss";
import "./scss/index.scss";

let app: AppData = {
  StatusBar: 0,
  Custom: null,
  CustomBar: 0,
  isNight: isNight(),
};

const App = createApp({
  // onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  onLaunch() {
    Taro.getSystemInfo({
      success: (info) => {
        app.StatusBar = info.statusBarHeight;
        let custom = Taro.getMenuButtonBoundingClientRect();
        app.Custom = custom;
        app.CustomBar = custom.bottom + custom.top - info.statusBarHeight;
      },
    });
  },
  provide: {
    app: app,
  },
});

App.use(store);

export default App;
