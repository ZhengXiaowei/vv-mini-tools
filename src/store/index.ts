import { createStore } from "vuex";
import { IRootState } from "@/types/store";

import system from "./modules/system";
import driving from "./modules/driving";

const store = createStore<IRootState>({
  modules: {
    system,
    driving,
  },
});

export default store;
