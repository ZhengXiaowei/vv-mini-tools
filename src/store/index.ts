import { createStore } from "vuex";
import { IRootState } from "@/types/store";

import system from "./modules/system";

const store = createStore<IRootState>({
  modules: {
    system,
  },
});

export default store;
