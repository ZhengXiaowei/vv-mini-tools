export default {
  pages: [
    "pages/index/index",
    "pages/cook/index",
    "pages/express/index",
    "pages/driving/index",
    "pages/driving-question-bank/index",
    "pages/ai/index",
  ],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于平台端展示",
    },
  },
};
