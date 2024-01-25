import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FormContext, TFormContext } from '../../context/FormContext';

interface AddProps {
  children: JSX.Element;
}

const AddButton = ({
  visible,
  parent,
}: {
  visible: boolean;
  parent: string;
}) => {
  const { clickOnElement } = useContext<TFormContext>(FormContext);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const element: DataFormElement = {
      id: uuidv4(),
      type: 'add',
      props: {},
      parent,
      position: 0,
    };
    console.log('handle click here');
    clickOnElement?.call(null, element);
  };

  return (
    <div
      onClick={handleClick}
      className={`after:content-['+'] after:absolute after:left-1/2 after:w-8 after:h-8
        after:font-bold after:hover:cursor-pointer after:rounded-full after:shadow-lg 
        after:flex after:justify-center after:items-center after:bg-pink-300 after:-m-3
         ${visible ? 'after:visible' : 'after:invisible'}
        `}
    ></div>
  );
};

export default function Add(props: AddProps) {
  const { clickOnElement } = useContext<TFormContext>(FormContext);
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // TODO: Esto servira para el update.
    // console.log('element clicked');
    event.stopPropagation();
    // console.log('current parent', props);
    const element = props.children.props;
    console.log(element, element);
    // clickOnElement?.call(null, element);
  };

  return (
    <div
      onMouseEnter={(e) => {
        e.stopPropagation();
        setShowAdd(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setShowAdd(false);
      }}
      className="flex flex-col col-span-3 py-3"
    >
      <div
        onClick={handleClick}
        className="border border-dashed border-gray-200 
        relative
        hover:cursor-pointer"
      >
        {props.children}
        <AddButton visible={showAdd} parent={'ABC12#'} />
      </div>
    </div>
  );
}
