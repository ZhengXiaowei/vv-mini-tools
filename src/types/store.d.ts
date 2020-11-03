import CacheMap from "@/helper/cache";

export interface IRootState {
  system: ISystemState;
  driving: IDrivingState;
}

export interface ISystemState {
  cache: CacheMap;
}

export interface ICacheCto<T> {
  url: string;
  data: T;
}

export interface IDrivingState {
  page: string | number;
  page_2: string | number;
  type: string | number;
}
