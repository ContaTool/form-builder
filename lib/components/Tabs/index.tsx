import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBaseItem } from '../../hooks/useBaseItem';
import Reenderizer from '../Reenderizer';

interface Props {
  children: Array<NDataFormElement<any>>;
}

interface TabsProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Tabs = (props: TabsProps) => {
  // Hooks
  const { handleClick, baseStyles } = useBaseItem(props);

  // States

  console.log('tab has been rendered', new Date());

  // Methods

  // Render
  return (
    <div onClick={handleClick} className={`${baseStyles} min-h-12`}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          {props.props.children.map((tab, index) => (
            <a
              key={uuidv4()}
              className={`
                ${
                  0 === index
                    ? 'font-msedium  text-black  border-pink-500'
                    : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'
                }
                shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `}
            >
              {tab.props.label}
            </a>
          ))}
        </nav>
      </div>

      {props.props.children.map((tab, index) => {
        return (
          <div
            key={uuidv4()}
            className={`${0 === index ? 'block' : 'hidden'} p-4`}
          >
            {/* <Reenderizer
              data={[tab]}
              isEditing={props.isEditing ?? false}
              parent={{ type: 'tabs', id: props.id || '' }}
            ></Reenderizer> */}
            {props.children}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
