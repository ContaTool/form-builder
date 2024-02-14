import React, { useState, useContext, useEffect, useRef } from 'react';

import New from './New';
import { PropertyEditor } from './PropertyEditor';
import { FormContext } from '../../context/FormContext';
import { findParentNodeById } from '../../helpers';
import { useStore } from '../../hooks/useStore';
// import { useItemSelected } from '../../hooks/useItemSelected';

interface ItemPropertiesProps {
  onSubmit: (data: any) => void;
  deleteItem: (id: string) => void;
}

const ItemProperties = (props: ItemPropertiesProps) => {
  // Context
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error('Cannot find Form context provider');
  }

  // Hooks
  const formData = useStore((state) => state.form);

  const _beforeSubmit = (data: any) => {
    const item = ctx.selectedItem();
    console.log('item', item);
    if (item) {
      const d = { id: item.id, ...data };
      if (Object.keys(d).includes('children')) {
        d.children = d.children.map((i: NDataFormElement<any>) => i.id);
      }
      props.onSubmit(d);
      return;
    }
    throw new Error('Item is not setted before save');
  };

  const _deleteItem = () => {
    try {
      console.log('delete called', ctx.selectedItem());

      props.deleteItem({
        ...ctx.selectedItem(),
      });
      ctx.selectItem(null);
    } catch (error) {
      console.log('error', error);
    }
    // Buscar y eliminar por el id
  };

  return (
    <div>
      {ctx.selectedItem() ? (
        <PropertyEditor deleteItem={_deleteItem} onSubmit={_beforeSubmit} />
      ) : (
        <New />
      )}
      <button
        onClick={() => ctx.selectItem(null)}
        title="Contact Sale"
        className="fixed z-90 bottom-12 right-4
        w-16 h-16 rounded-full  drop-shadow-lg
        bg-pink-500 text-white font-bold"
      >
        +
      </button>
    </div>
  );
};

export default ItemProperties;
