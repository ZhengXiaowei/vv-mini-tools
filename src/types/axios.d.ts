export type AxiosParams = {
  url: string;
  data?: any;
  config?: AxiosConfig;
};

type AxiosConfig = {
  params?: any;
  data?: any;
  header?: AxiosHeader;
};

type AxiosHeader = {
  use?: boolean;
  toast?: boolean;
  [key: string]: any;
};

type AxiosResponse<T> = {
  status: number;
  msg: string;
  result: T;
};
