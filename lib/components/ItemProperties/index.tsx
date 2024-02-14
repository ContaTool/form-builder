import React, { useState, useContext, useEffect, useRef } from 'react';

import New from './New';
import { PropertyEditor } from './PropertyEditor';
import { FormContext } from '../../context/FormContext';
// import { useItemSelected } from '../../hooks/useItemSelected';

interface ItemPropertiesProps {
  onSubmit: (data: any) => void;
}

const ItemProperties = (props: ItemPropertiesProps) => {
  // Hooks
  const ctx = useContext(FormContext);

  console.log('el contexto es ', ctx);

  if (!ctx) {
    throw new Error('Cannot find Form context provider');
  }

  useEffect(() => {
    console.log('cambio el contexto ', ctx.selectedItem());
  }, [ctx.selectedItem()]);

  const _beforeSubmit = (data: any) => {
    // if (item) {
    //   const d = { id: item.id, ...data };
    //   if (Object.keys(d).includes('children')) {
    //     d.children = d.children.map((i: NDataFormElement<any>) => i.id);
    //   }
    //   props.onSubmit(d);
    //   return;
    // }
    // throw new Error('Item is not setted before save');
  };

  return (
    <div>
      {ctx.selectedItem() ? (
        <PropertyEditor onSubmit={_beforeSubmit} />
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
