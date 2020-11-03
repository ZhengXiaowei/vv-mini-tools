import { GetterTree } from "vuex";
import { IRootState, IDrivingState } from "src/types/store";

const getters: GetterTree<IDrivingState, IRootState> = {
  page: (state) => state.page,
  page2: (state) => state.page_2,
  type: (state) => state.type,
};

export default getters;
