import React, { useContext, useEffect, useState } from 'react';
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
import Container from '../Container';

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
  data: DataFormElement;
  isEditing: boolean;
  parent?: string;
}): JSX.Element => {
  // console.log('render with parent', parent);

  // States
  const [elements, setElements] = useState(data);

  // const split_times = 12;
  // const children_size = 0;
  // const split_times_array = Array.from({ length: children_size });

  // const test = (option: string) => {
  //   setElements([...replacePlaceholder(data, 'field_type', option)]);
  // };

  useEffect(() => {
    // console.log('received form', data);
    setElements(data);
  }, [data]);

  if (!elements) return <></>;

  return (
    <>
      {isEditing ? (
        <Add parent={elements.id} id={uuidv4()} position={0} />
      ) : null}

      {elements.props.children?.map(
        (item: DataFormElement, index: number): JSX.Element => {
          console.log('item', item);

          const Component = componentMapping[item.type];

          if (Component) {
            const commonProps = {
              ...item.props,
              key: item.id,
              id: item.id,
              type: item.type,
              parent,
              isEditing: isEditing,
            };

            const renderedComponent = (
              <>
                <Component {...commonProps}>
                  <Reenderizer
                    data={item}
                    isEditing={isEditing}
                    parent={elements.id}
                  />
                </Component>
                {isEditing ? (
                  <Add
                    parent={elements.id || ''}
                    id={uuidv4()}
                    key={uuidv4()}
                    position={index + 1}
                  />
                ) : null}
              </>
            );

            return renderedComponent;
          }

          // If no corresponding component is found, you can return a default or handle it as needed
          return <div key={item.id}>Unsupported field type: {item.type}</div>;
        }
      )}
    </>
  );
};

export default Reenderizer;
