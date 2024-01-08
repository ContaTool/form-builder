import React from 'react';
import { Recursive } from '../Reenderizer';
import { FormElement } from '../Form';

interface TabsProps {
  tabs: any[];
}

const Tabs = (props: TabsProps) => {
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
                href="#"
                className="shrink-0 border-b-2 border-transparent px-1 pb-4 
              text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
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
            return <Recursive key={index} {...element} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
