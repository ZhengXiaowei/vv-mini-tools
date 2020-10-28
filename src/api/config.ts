import Taro from "@tarojs/taro";
import interceptors from "./interceptor";
import { formatURL } from "@/helper/format";
import { AxiosConfig, AxiosParams } from "@/types/axios";

interceptors.forEach((interceptor) => Taro.addInterceptor(interceptor));

// 二次简单封装
class Axios {
  baseURL: string;

  constructor(options = { baseURL: "" }) {
    this.baseURL = options.baseURL;
  }

  create(req: AxiosParams, method: keyof Taro.request.method = "GET") {
    const { url, data, config } = req;
    const options = {
      url: this.baseURL + formatURL(url, config?.params),
      method,
      data,
      header: config?.header,
    };
    return Taro.request(options);
  }

  get(url: string, config?: AxiosConfig) {
    return this.create({ url, config });
  }

  post(url: string, data?: any, config?: AxiosConfig) {
    return this.create({ url, data, config }, "POST");
  }
}

const axios = new Axios({ baseURL: "/api" });

export default axios;
