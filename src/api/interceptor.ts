import Taro from "@tarojs/taro";
import { hitApiCache, resCache } from "@/helper";

// 自定义拦截器
const apiInterceptor = (chain: Taro.Chain) => {
  const req = chain.requestParams;
  const useToast = req.header?.toast ?? true;
  const _hasResultCache = hitApiCache(req);
  // 缓存有数据 返回缓存数据
  if (_hasResultCache) return Promise.resolve(_hasResultCache);
  useToast && Taro.showLoading({ title: "使劲加载ing..." });
  return chain.proceed(req).then((res) => {
    // 缓存数据
    resCache(res.data, req);
    useToast && Taro.hideLoading();
    return res.data;
  });
};

const interceptor = [apiInterceptor, Taro.interceptors.logInterceptor];

export default interceptor;
