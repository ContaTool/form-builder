import React, { useState, createContext } from 'react';
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';

import { FormDragDropContext } from './FormDragDropContext';

export type FormContextProps = {
  click: () => void;
  addDropable: (data: Droppable) => void;
};

type Droppable = {
  id: string;
  position: number;
  parent: string | undefined;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: () => {};
}

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  // const [] = useState<string>([]);
  const [droppables, setDroppables] = useState<Droppable[]>([]);
  const [selectedElement, setSelectedElement] = useState<string>('');

  const click = () => {
    // console.log('clicked');
    setSelectedElement({ element: 'test' });
  };

  // RemoveItemByID

  // findItemByID
  const findDropableByID = (ID: string) => {
    return droppables.find((i) => i.id === ID);
  };

  // addItem
  const addDropable = (droppable: Droppable) => {
    setDroppables((prev) => [...prev, droppable]);
  };

  const _onDragEnd: OnDragEndResponder = (e) => {
    // console.log('find the value :)', e);
    // console.log('droppables', droppables);

    const d = e.destination?.droppableId;
    if (!d) {
      return new Error('No destenitation id setted');
    }
    // console.log('finded', findDropableByID(d));
    onDragEnd({ ...findDropableByID(d), type: e.draggableId });
  };

  const values = {
    addDropable,
    selectedElement,
    click,
  };
  return (
    <FormContext.Provider value={values}>
      <DragDropContext onDragEnd={_onDragEnd}>{children}</DragDropContext>
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
