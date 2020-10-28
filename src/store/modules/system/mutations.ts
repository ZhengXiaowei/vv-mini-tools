import { MutationTree } from "vuex";
import { ISystemState } from "src/types/store";

const mutations: MutationTree<ISystemState> = {
  // ON_CHANGE_CHANNEL(state, channel: string | number) {
  //   let type = typeof channel;
  //   let sex = 1;
  //   if (type === "string") sex = channel === "female" ? 2 : 1;
  //   else sex = channel as number;
  //   state.sex = sex;
  // },
};

export default mutations;
