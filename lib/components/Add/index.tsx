import React, { useContext, useEffect } from 'react';

import { Droppable } from '@hello-pangea/dnd';
import { FormContext } from '../../context/FormContext';

interface AddProps {
  parent: string;
  id: string;
  position: number;
}

export default function Add(props: AddProps) {
  // Context
  const useFormContext = useContext(FormContext);

  if (!useFormContext) {
    throw new Error('Form context needs FormContextProvider');
  }

  useEffect(() => {
    if (props.parent && props.id && !isNaN(props.position)) {
      console.log('parent has been set', props.parent, props.id, props.position);
      useFormContext.addDropable({...props});
    }
  }, [props.parent, props.id, props.position]);

  // const { clickOnElement } = useContext<TFormContext>(FormContext);
  // const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // TODO: Esto servira para el update.
    // console.log('element clicked');
    event.stopPropagation();
    // console.log('current parent', props);
    // const element = props.children.props;
    // console.log(element, element);
    // clickOnElement?.call(null, element);
  };

  return (
    <div className="">
      <div onClick={handleClick} className="rounded-md relative">
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
