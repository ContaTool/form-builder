import React, { useContext, useEffect } from 'react';

import { Droppable } from '@hello-pangea/dnd';
import { DragDropContext } from '../../context/DragDropContextProvider';

interface AddProps {
  parent: { id: string; type: string };
  id: string;
  position: number;
}

export default function Add(props: AddProps) {
  // Context
  const useDragDropContext = useContext(DragDropContext);

  if (!useDragDropContext) {
    throw new Error('DragDrop Context is not implemented');
  }

  useEffect(() => {
    if (props.parent.id && props.id && !isNaN(props.position)) {
      useDragDropContext.addDropable({
        parent: props.parent.id,
        id: props.id,
        position: props.position,
      });
    }
  }, [props.parent, props.id, props.position]);

  if (props.parent.type === 'container') {
    return <></>;
  }

  return (
    <div className="">
      <div className="rounded-md relative">
        <Droppable droppableId={props.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`droppable-area transition-all h-[1px] ${snapshot.isDraggingOver ? 'bg-pink-300 h-[50px]' : 'bg-pink-200'}`}
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}
