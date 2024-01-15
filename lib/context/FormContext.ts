import React, { createContext } from 'react';

export type TFormContext = {
  addNewElement?: () => void;
};

export const FormContext = createContext<TFormContext>({});
