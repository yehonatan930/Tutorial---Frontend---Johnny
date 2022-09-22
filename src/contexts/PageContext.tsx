import React, { createContext, useEffect, useState } from "react";
import { page } from "../utils/types";

export interface IPageContext {
  page: page;
  refreshContext: () => void;
}

export const PageContext = createContext<IPageContext>({} as IPageContext);

export const PageProvider: React.FC = (props) => {
  const [users, setPages] = useState<Page[]>([]);

  useEffect(() => {
    refreshContext();
  }, []);

  const refreshContext = async () => {
    setPages(await PageService.getAllPages());
  };

  const ctxValue = {
    users,
    refreshContext,
  };

  return (
    <PageContext.Provider value={ctxValue}>
      {props.children}
    </PageContext.Provider>
  );
};
