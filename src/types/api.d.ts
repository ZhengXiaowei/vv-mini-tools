// Cook Search Result

export interface CookList {
  total: number;
  num: number;
  list: CookItem[];
}

export interface CookItem {
  id: number;
  classid: number;
  name: string;
  peoplenum: Peoplenum;
  preparetime: Time;
  cookingtime: Time;
  content: string;
  pic: string;
  tag: string;
  material: Material[];
  process: Process[];
}

export enum Time {
  The1020分钟 = "10-20分钟",
  The10分钟内 = "10分钟内",
  The12小时 = "1-2小时",
}

export interface Material {
  mname: string;
  type: number;
  amount: string;
}

export enum Peoplenum {
  The12人 = "1-2人",
  The34人 = "3-4人",
}

export interface Process {
  pcontent: string;
  pic: string;
}

export interface QueryParams {
  keyword: string;
  num: number;
}

// Cook Category

export interface CookType {
  classid: number;
  name: string;
  parentid: number;
  list?: CookType[];
}

// Express

export interface Express {
  number: string;
  type: string;
  typename: string;
  logo: string;
  list: ExpressItem[];
  deliverystatus: number;
  issign: number;
}

export interface ExpressItem {
  time?: string;
  status?: string;
  date?: string;
  year?: string;
  month?: string;
  time_info?: string;
  children?: ExpressItem[];
}

// Ask Question

export interface QuestionAnswer {
  type: string;
  content: string;
  [key: string]: any;
}

// Driving Licence Query

export type DrivingType =
  | "A1"
  | "A3"
  | "B1"
  | "A2"
  | "B2"
  | "C1"
  | "C2"
  | "C3"
  | "D"
  | "E"
  | "F";

export type DrivingSubject = 1 | 4;

export type DrivingSort = "normal" | "rand";

export interface DrivingQuery {
  type: DrivingType;
  subject: DrivingSubject;
  pagesize: number;
  pagenum: number;
  sort: DrivingSort;
  chapter: number;
}

export interface Driving {
  total: number;
  pagenum: number;
  pagesize: number;
  subject: number;
  type: string;
  chapter: number;
  sort: string;
  list: DrivingQuestion[];
}

export interface DrivingQuestion {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  options?: DrivingOptions[];
  answer: string;
  explain: string;
  pic: string;
  type: string;
  question_type?: number;
  chapter: string;
}

export interface DrivingOptions {
  value: string;
  label: string;
}

// 天气
export interface WeatherInfo {
  city: string;
  date: string;
  week: string;
  weather: string;
  img: string;
  temp: string;
  temphigh: string;
  templow: string;
  humidity: string;
  daily: WeatherDailyInfo[];
  index: WeatherIndex[];
}

export interface WeatherDailyInfo {
  date: string;
  week: string;
  day: WeatherDay;
  night: WeatherDay;
}

export interface WeatherDay {
  weather: string;
  temphigh: string;
  templow: string;
  img: string;
  winddirect: string;
  windpower: string;
}

export interface WeatherIndex {
  iname: string;
  ivalue: string;
  detail: string;
}
