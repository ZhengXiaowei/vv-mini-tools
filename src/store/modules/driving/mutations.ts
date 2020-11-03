import { MutationTree } from "vuex";
import { IDrivingState } from "src/types/store";

const mutations: MutationTree<IDrivingState> = {
  ON_PAGE_CHANGE(state, page: number) {
    state.page = page;
  },
  ON_PAGE2_CHANGE(state, page: number) {
    state.page_2 = page;
  },
  ON_TYPE_CHANGE(state, type: number) {
    state.type = type;
  },
};

export default mutations;
