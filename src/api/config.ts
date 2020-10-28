import Taro from "@tarojs/taro";
import interceptors from "./interceptor";
import { formatURL } from "@/helper/format";
import { AxiosConfig, AxiosParams, AxiosResponse } from "@/types/axios";

interceptors.forEach((interceptor) => Taro.addInterceptor(interceptor));

// 二次简单封装
class Axios {
  baseURL: string;
  apiKey: string;

  constructor(options = { baseURL: "", apiKey: "" }) {
    this.baseURL = options.baseURL;
    this.apiKey = options.apiKey;
  }

  create<T>(
    req: AxiosParams,
    method: keyof Taro.request.method = "GET"
  ): Promise<AxiosResponse<T>> {
    const { url, data, config } = req;
    const CONFIG = {
      ...config?.params,
      key: this.apiKey,
    };

    const options = {
      url: this.baseURL + formatURL(url, CONFIG),
      method,
      data,
      header: config?.header,
    };

    return Taro.request(options).then((data) => data) as Promise<
      AxiosResponse<T>
    >;
  }

  get<T>(url: string, config?: AxiosConfig) {
    return this.create<T>({ url, config });
  }

  post<T>(url: string, config?: AxiosConfig) {
    let postParams: AxiosParams = { url, data: config?.data, config };
    return this.create<T>(postParams, "POST");
  }
}

const axios = new Axios({
  baseURL: "https://binstd.apistd.com",
  apiKey: "yhV4QkR2bBN7B99BQT4DdS8z",
});

export default axios;
