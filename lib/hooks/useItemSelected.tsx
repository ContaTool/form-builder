import { useContext } from 'react';
import { ItemSelectedContext } from '../context/ItemSelectedContext';

export const useItemSelected = () => {
  const ctx = useContext(ItemSelectedContext);
  if (!ctx) {
    throw new Error(
      'ItemsSelected context needs ItemsSelectedContextProvider in order to be used'
    );
  }

  const _selectItem = (item) => {
    console.log('item has been selected hook', item);
    ctx.selectItem(1);
  };

  return {
    selectItem: _selectItem,
    item: ctx.item,
  };
};