import React, { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { DragDropContextProvider } from './DragDropContext';

export type ItemSelectedContextProps = {
  selectItem: Dispatch<SetStateAction<number>>;
  item: number;
};

const ItemSelectedContext = createContext<ItemSelectedContextProps | undefined>(
  undefined
);

interface ItemSelectedContextProviderProps {
  children: React.ReactNode;
}

const ItemSelectedContextProvider = (
  props: ItemSelectedContextProviderProps
) => {
  const [item, selectItem] = useState<number>(0);

  const value = {
    item,
    selectItem,
  };

  return (
    <ItemSelectedContext.Provider value={value}>
      {props.children}
    </ItemSelectedContext.Provider>
  );
};

export { ItemSelectedContextProvider, ItemSelectedContext };
