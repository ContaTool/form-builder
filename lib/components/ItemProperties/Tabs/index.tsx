import React from 'react';

interface TabsProps {}

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(true);

  return (
    <div className="border-b border-gray-200 pt-4 pl-2">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <a
          className={`
        ${
          activeTab === true
            ? 'font-medium  text-black  border-pink-500'
            : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'
        }
        shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `}
        >
          Nuevo elemento
        </a>
        <a
          className={`
        ${
          activeTab === true
            ? 'font-medium  text-black  border-pink-500'
            : ' text-gray-500  hover:text-gray-700 hover:border-gray-300'
        }
        shrink-0 border-b-2  px-1 pb-4 hover:cursor-pointer text-md  `}
        >
          Editor de elemento
        </a>
      </nav>
    </div>
  );
};

export default Tabs;
