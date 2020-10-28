import { GetterTree } from "vuex";
import { IRootState, ISystemState } from "src/types/store";

const getters: GetterTree<ISystemState, IRootState> = {
  // sex: (state) => state.sex,
};

export default getters;
