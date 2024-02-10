import React, { createContext, useCallback, useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type ItemSelectedContextProps = {
  selectItem: Dispatch<SetStateAction<NDataFormElement<any> | undefined>>;
  item: NDataFormElement<any> | undefined;
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
  const [item, selectItem] = useState<NDataFormElement<any> | undefined>(
    undefined
  );

  const _selectItem = useCallback(
    (item: NDataFormElement<any>) => {
      selectItem(item);
    },
    [selectItem]
  );

  const contextValue = useMemo(
    () => ({
      item,
      selectItem: _selectItem,
    }),
    [item, selectItem]
  );

  return (
    <ItemSelectedContext.Provider value={contextValue}>
      {props.children}
    </ItemSelectedContext.Provider>
  );
};

export { ItemSelectedContextProvider, ItemSelectedContext };
