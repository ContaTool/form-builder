import React, { useState } from 'react';

import Input from '../Input';
import useItem from '../../hooks/useItem';

type Tabs = {};

const Tabs = (props: Tabs) => {
  const { handleClick, baseStyles } = useItem({ name: 'tab' });
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={`${baseStyles}`} onClick={handleClick}>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          {props.props.children.map((tab, index) => (
            <a
              onClick={() => setActiveTab(index)}
              className={`
                ${
                  activeTab === index
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

      {/* Childrens */}
      {props.props.children.map((tab, index) => (
        <div className={`${activeTab === index ? 'block' : 'hidden'} p-4`}>
          <Input />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
