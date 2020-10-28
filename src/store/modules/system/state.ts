import CacheMap from "@/helper/cache";
import { ISystemState } from "src/types/store";

const state: ISystemState = {
  cache: new CacheMap(50),
};

export default state;
