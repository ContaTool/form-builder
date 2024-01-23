import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Recursive } from '../Reenderizer';

import { FormContext } from '../../context/FormContext';
import type { TFormContext } from '../../context/FormContext';

interface TabsProps extends ElementProps {
  tabs?: DataFormElement[];
}

const Tabs = (props: TabsProps) => {
  if (!props.tabs) return;

  const [activeTab, setActiveTab] = React.useState(props.tabs[0].props.label);

  // Contexts
  const { clickOnElement } = useContext<TFormContext>(FormContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const element = props.element;
    clickOnElement?.call(null, element);
  };

  return (
    <div onClick={handleClick}>
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
                key={uuidv4()}
                onClick={() => setActiveTab(tab.props.label)}
                className={`
                ${
                  activeTab === tab.props.label
                    ? 'font-medium  text-black  border-pink-500'
                    : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'
                }
                shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `}
              >
                {tab.props.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {props.tabs.map((tab) => (
        <div className="pt-4">
          {tab.props.children?.map(
            (element: DataFormElement, index: number) => {
              return (
                <div
                  key={uuidv4()}
                  className={`${
                    activeTab === tab.props.label ? 'block' : 'hidden'
                  }`}
                >
                  <Recursive key={uuidv4()} {...element} />
                </div>
              );
            }
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
