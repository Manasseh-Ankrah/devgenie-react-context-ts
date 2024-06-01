import React from "react";

export type nextPagesTypes = { page: number; totalPages: number };

export interface stateProp {
  isDarkMode: boolean;
}

export interface actionProp {
  type: string;
  item: stateProp;
}

export interface providerProps {
  reducer: React.Reducer<stateProp, actionProp>;
  initialState: stateProp;
  children: React.ReactNode;
}
