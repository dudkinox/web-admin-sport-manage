import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import GetNewsResponse from "../models/Response/GetNewsResponse";
import NewsRequest from "../models/Request/NewsRequest";
import NewsServices from "../services/newsServices";
import initEditor from "../common/EditorCommon";

interface NewsContextProps {}

export const NewsContext = createContext<NewsContextProps>({});

interface ChildrenProps {
  children: ReactNode;
}

export function NewsContextProvider({ children }: ChildrenProps) {
  const values = useMemo(() => ({}), []);

  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
}
