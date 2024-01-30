import React, { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { DragDropContextProvider } from './DragDropContext';

export type ItemSelectedContextProps = {
  selectItem: Dispatch<SetStateAction<ItemProps | undefined>>;
  item: ItemProps | undefined;
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
  const [item, selectItem] = useState<ItemProps | undefined>(undefined);

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
