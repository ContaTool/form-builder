import React, { createContext } from 'react';

export type TFormContext = {
  clickOnElement?: (params: DataFormElement) => void;
};

export const FormContext = createContext<TFormContext>({});
