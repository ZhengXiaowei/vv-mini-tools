import { Module } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import { ISystemState, IRootState } from "src/types/store";

const systemModules: Module<ISystemState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default systemModules;
