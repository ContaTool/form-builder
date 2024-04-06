import React, { useState } from 'react';

import { Props } from './index';
import Reenderizer from '../Reenderizer';

export const PlaceholderEditor = (props: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={`w-full`}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-1" aria-label="Tabs">
          {props.children.map((tab, index) => (
            <a
              key={crypto.randomUUID()}
              onClick={() => setActiveTab(index)}
              className={`
                  ${
                    activeTab === index
                      ? 'font-msedium  text-black  border-gray-500'
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
      {props.children.map((tab, index: number) => (
        <div className={`${activeTab === index ? 'block' : 'hidden'} p-4`}>
          <Reenderizer
            data={[tab]}
            isEditing={true}
            // parent={{ type: 'tabs', id: props.id || '' }}
          ></Reenderizer>
        </div>
      ))}
    </div>
  );
};
