import { Module } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import { IDrivingState, IRootState } from "src/types/store";

const systemModules: Module<IDrivingState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default systemModules;
