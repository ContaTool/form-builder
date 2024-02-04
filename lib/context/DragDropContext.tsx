import React, { useState, createContext } from 'react';
import { DragDropContext as DndContext } from '@hello-pangea/dnd';
import { Droppable, useDragDrop } from '../hooks/useDragDrop';

export type DragDropContextProps = {
  // click: () => void;
  addDropable: (data: Droppable) => void;
  isDragging: boolean;
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
  const {
    addDropable,
    onDradStart: _onDragStart,
    onDragEnd: _onDragEnd,
    isDragging,
  } = useDragDrop({ onDragEnd });

  const values = {
    addDropable,
    isDragging,
  };

  return (
    <DragDropContext.Provider value={values}>
      <DndContext onDragStart={_onDragStart} onDragEnd={_onDragEnd}>
        {children}
      </DndContext>
    </DragDropContext.Provider>
  );
};

export { DragDropContext, DragDropContextProvider };
