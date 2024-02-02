import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBaseItem } from '../../hooks/useBaseItem';
import Reenderizer from '../Reenderizer';
import Add from '../Add';

interface Props {
  children: Array<NDataFormElement<any>>;
}

interface TabsProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Tabs = (props: TabsProps) => {
  const { handleClick, baseStyles } = useBaseItem(props);
  const [activeTab, setActiveTab] = React.useState('');

  useEffect(() => {
    setActiveTab(
      props.props.children.length > 0 ? props.props.children[0].props.label : ''
    );
  }, [props]);

  return (
    <div onClick={handleClick} className={`${baseStyles}`}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          {props.props.children.map((tab) => (
            <a
              key={uuidv4()}
              onClick={() => setActiveTab(tab.props.label)}
              className={`
                ${
                  activeTab === tab.props.label
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

      {props.props.children.map((tab) => {
        console.log('current tab', tab);
        return (
          <div
            className={`${activeTab === tab.props.label ? 'block' : 'hidden'} p-4`}
          >
            <Reenderizer
              data={[tab]}
              isEditing={true}
              parent={props.id}
            ></Reenderizer>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
