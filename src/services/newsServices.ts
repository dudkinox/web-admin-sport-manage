import https from "../https";
import getNewsResponse from "../models/Response/GetNewsResponse";

const NewsServices = {
  getNewsService() {
    return https.get<getNewsResponse[]>(`/apis/news/popup`);
  },
  addNewsService(type: string, data: any) {
    return https.post(`/apis/news/popup/?type=${type}`, data);
  },
};

export default NewsServices;
