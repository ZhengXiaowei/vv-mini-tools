import CacheMap from "@/helper/cache";

export interface IRootState {
  system: ISystemState;
}

export interface ISystemState {
  cache: CacheMap;
}

export interface ICacheCto<T> {
  url: string;
  data: T;
}
