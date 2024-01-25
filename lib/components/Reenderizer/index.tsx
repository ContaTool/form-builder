import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { replacePlaceholder } from '../../helpers';

import Title from '../Title';
import Card from '../Card';
import Input from '../Input';
import Add from '../Add';
import Tabs from '../Tabs';
import Select from '../Select';
import TextArea from '../TextArea';
import Paragraph from '../Paragraph';
import Root from '../Root';

export const Recursive = (props: DataFormElement): JSX.Element => {
  return <></>;
};

const componentMapping: { [key: string]: React.ComponentType<any> } = {
  root: Root,
  title: Title,
  card: Card,
  paragraph: Paragraph,
};

const Reenderizer = ({
  data,
  isEditing,
  parent,
}: {
  data: DataFormElement[];
  isEditing: boolean;
  parent?: string;
}): JSX.Element => {
  const [elements, setElements] = useState(data);

  const test = (option: string) => {
    setElements([...replacePlaceholder(data, 'field_type', option)]);
  };

  useEffect(() => {
    setElements(data);
  }, [data]);

  if (elements.length === 0) return <></>;

  return (
    <>
      {elements.map((item: DataFormElement): JSX.Element => {
        // Check if the field_type has a corresponding component in the mapping
        const Component = componentMapping[item.type];

        if (Component) {
          const commonProps = {
            key: item.id,
            ...item.props,
            parent,
            isEditing: isEditing,
          };

          // console.log('item', commonProps);

          const renderedComponent = (
            <Component {...commonProps}>
              <Reenderizer
                data={item.props?.children || []}
                isEditing={isEditing}
                parent={item.id}
              />
            </Component>
          );

          return isEditing && item.type !== 'root' ? (
            <Add>{renderedComponent}</Add>
          ) : (
            renderedComponent
          );
        }

        // If no corresponding component is found, you can return a default or handle it as needed
        return <div key={item.id}>Unsupported field type: {item.type}</div>;
      })}
    </>
  );
};

export default Reenderizer;
