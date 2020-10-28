export default class CacheMap {
  private maxLength: number;
  private map: Map<string, any>;

  constructor(max: number) {
    this.maxLength = max || 50;
    this.map = new Map();
  }

  get<T>(key: string): T | null {
    if (this.map.has(key)) {
      let mapVal = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, mapVal);
      return mapVal;
    } else return null;
  }

  put<T>(key: string, val: T) {
    if (this.map.has(key)) this.map.delete(key);
    else {
      // 达到最大长度时删除不常用的key
      if (this.map.size === this.maxLength) {
        let notCommonMap = this.map.keys().next().value;
        this.map.delete(notCommonMap);
      }
    }
    this.map.set(key, val);
  }
}
