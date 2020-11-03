import Taro from "@tarojs/taro";
import { ActionTree, ActionContext } from "vuex";

import { IDrivingState, IRootState } from "@/types/store";

const actions: ActionTree<IDrivingState, IRootState> = {
  save(context: ActionContext<IDrivingState, IRootState>, page: number) {
    Taro.setStorageSync("page", page);
    context.commit("ON_PAGE_CHANGE", page);
  },
  save2(context: ActionContext<IDrivingState, IRootState>, page: number) {
    Taro.setStorageSync("page_2", page);
    context.commit("ON_PAGE2_CHANGE", page);
  },
};

export default actions;
