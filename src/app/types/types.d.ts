import React from "react";

export type nextPagesTypes = {
  page: number;
  totalPages: number;
};

export type stateProp = {
  isDarkMode: boolean;
};

export type actionProp = {
  type: string;
  item: stateProp;
};

export type providerProps = {
  reducer: React.Reducer<stateProp, actionProp>;
  initialState: stateProp;
  children: React.ReactNode;
};
