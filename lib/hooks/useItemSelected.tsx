import { useCallback, useContext } from 'react';
import { ItemSelectedContext } from '../context/ItemSelectedContext';

export const useItemSelected = () => {
  const ctx = useContext(ItemSelectedContext);
  if (!ctx) {
    throw new Error(
      'ItemsSelected context needs ItemsSelectedContextProvider in order to be used'
    );
  }

  console.log('use Item selected hook rendered');

  const _selectItem = useCallback(
    (item: NDataFormElement<any> | undefined) => {
      console.log('click received', item);
      ctx.selectItem(item);
    },
    [ctx.selectItem]
  );

  return {
    selectItem: _selectItem,
    item: ctx.item,
  };
};
