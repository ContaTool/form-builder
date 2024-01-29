import React, { useState, createContext } from 'react';
import {
  DragDropContext as DndContext,
  OnDragEndResponder,
} from '@hello-pangea/dnd';
import { Droppable, useDragDrop } from '../hooks/useDragDrop';

// import { FormDragDropContext } from './FormDragDropContext';

export type DragDropContextProps = {
  // click: () => void;
  addDropable: (data: Droppable) => void;
};

const DragDropContext = createContext<DragDropContextProps | undefined>(
  undefined
);

export interface DragDropContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

const DragDropContextProvider = ({
  children,
  onDragEnd,
}: DragDropContextProvider) => {
  // States
  const { addDropable, onDragEnd: _onDragEnd } = useDragDrop({ onDragEnd });

  const values = {
    addDropable,
  };

  return (
    <DragDropContext.Provider value={values}>
      <DndContext onDragEnd={_onDragEnd}>{children}</DndContext>
    </DragDropContext.Provider>
  );
};

export { DragDropContext, DragDropContextProvider };
