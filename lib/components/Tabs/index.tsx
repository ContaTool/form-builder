import React from 'react';
import { Recursive } from '../Reenderizer';
import { FormElement } from '../Form';

interface TabsProps {
  tabs: any[];
}

const Tabs = (props: TabsProps) => {
  if (!props.tabs) return;

  const [activeTab, setActiveTab] = React.useState(props.tabs[0].label);

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Patrimonio</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {props.tabs.map((tab) => (
              <a
                onClick={() => setActiveTab(tab.label)}
                className={`
                ${
                  activeTab === tab.label
                    ? 'font-medium  text-black  border-pink-500'
                    : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'
                }
                shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `}
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {props.tabs.map((tab) => (
        <div className="pt-4">
          {tab.children?.map((element: FormElement, index: number) => {
            return (
              <div
                className={`${activeTab === tab.label ? 'block' : 'hidden'}`}
              >
                <Recursive key={index} {...element} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
