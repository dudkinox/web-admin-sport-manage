import https from "../https";
import getNewsResponse from "../models/Response/GetNewsResponse";

const getNewsService = () => {
  return https.get<getNewsResponse[]>(`/apis/news/popup`);
};

const addNewsService = (type: string, data:any) => {
  return https.post(`/apis/news/popup/?type=${type}`, data);
};

const NewsServices = {
  GetNews: getNewsService,
  AddNews: addNewsService
}

export default NewsServices;