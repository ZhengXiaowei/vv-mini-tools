import { ActionTree, ActionContext } from "vuex";

import { ISystemState, IRootState, ICacheCto } from "@/types/store";

const actions: ActionTree<ISystemState, IRootState> = {
  // 验证接口是否存在缓存中
  checkApiInCache<T>(
    context: ActionContext<ISystemState, IRootState>,
    url: string
  ): T | null {
    return context.state.cache.get<T>(url);
  },

  // 缓存接口数据
  cacheApiData<T>(
    context: ActionContext<ISystemState, IRootState>,
    data: ICacheCto<T>
  ): void {
    context.state.cache.put<T>(data.url, data.data);
  },
};

export default actions;
