import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import GetNewsResponse from "../models/Response/GetNewsResponse";
import NewsRequest from "../models/Request/NewsRequest";
import NewsServices from "../services/newsServices";

interface NewsContextProps {
  topic: string;
  setTopic: (value: string) => void;
  detail: string;
  setDetail: (value: string) => void;
  createdAt: string;
  setCreatedAt: (value: string) => void;
  updatedAt: string;
  setUpdatedAt: (value: string) => void;
  newsType: string;
  setNewsType: (value: string) => void;
  news: GetNewsResponse[];
  setNews: (value: GetNewsResponse[]) => void;
}

export const NewsContext = createContext<NewsContextProps>({
  topic: "",
  setTopic: (value: string) => {},
  detail: "",
  setDetail: (value: string) => {},
  createdAt: "",
  setCreatedAt: (value: string) => {},
  updatedAt: "",
  setUpdatedAt: (value: string) => {},
  newsType: "",
  setNewsType: (value: string) => {},
  news: [],
  setNews: (value: GetNewsResponse[]) => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export function NewsContextProvider({ children }: ChildrenProps) {
  const [topic, setTopic] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [newsType, setNewsType] = useState("");
  const [news, setNews] = useState<GetNewsResponse[]>([]);

  const addNews = useMemo(
    () => (params: string, data: any) => {
      NewsServices.AddNews(params, data)
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    },
    []
  );

  const handlerSubmit = useMemo(
    () => () => {
      const baseData: NewsRequest = {
        topic,
        detail,
      };
      addNews("type", baseData);
    },
    []
  );

  useEffect(() => {
    NewsServices.GetNews()
      .then((res: any) => {
        setNews(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const values = useMemo(
    () => ({
      topic,
      setTopic,
      detail,
      setDetail,
      createdAt,
      setCreatedAt,
      updatedAt,
      setUpdatedAt,
      newsType,
      setNewsType,
      news,
      setNews,
      handlerSubmit,
    }),
    [
      topic,
      setTopic,
      detail,
      setDetail,
      createdAt,
      setCreatedAt,
      updatedAt,
      setUpdatedAt,
      newsType,
      setNewsType,
      news,
      setNews,
      handlerSubmit,
    ]
  );

  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
}
