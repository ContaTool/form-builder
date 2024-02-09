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
import Button from '../Button';
import Detailed from '../Detailed';
import Root from '../Root';
import Container from '../Container';

const componentMapping: { [key: string]: React.ComponentType<any> } = {
  root: Root,
  title: Title,
  card: Card,
  input: Input,
  paragraph: Paragraph,
  textarea: TextArea,
  container: Container,
  select: Select,
  detailed: Detailed,
  button: Button,
  tabs: Tabs,
  tab: Root,
};

const Reenderizer = ({
  data,
  isEditing,
  parent,
  detailed,
}: {
  data: NDataFormElement<any>[];
  isEditing: boolean;
  parent?: { id: string; type: string };
  detailed?: {
    name: string;
    index: number;
  };
}): JSX.Element => {
  useEffect(() => {
    // console.log('Reenderizer');
  }, []);

  return (
    <>
      {data.map((item: NDataFormElement<any>, index: number) => {
        const Component = componentMapping[item.type];

        if (Component) {
          const commonProps: NDataFormElement<any> = {
            props: { ...item.props },
            key: item.id,
            id: item.id,
            type: item.type,
            parent: parent,
            isEditing: isEditing ?? false,
            position: index,
            detailed: detailed,
          };

          return (
            <>
              <Component {...commonProps}>
                {isEditing && item.props.children ? (
                  <Add
                    parent={{ id: item.id || '', type: item.type }}
                    id={uuidv4()}
                    key={uuidv4()}
                    position={0}
                  />
                ) : null}

                <Reenderizer
                  detailed={detailed}
                  data={item.props.children}
                  isEditing={isEditing}
                  parent={{ id: item.id || '', type: item.type }}
                />
              </Component>
              {isEditing &&
              (!item.props.children ||
                (data.length == index + 1 &&
                  item.type !== 'tab' &&
                  item.type !== 'root')) ? (
                <Add
                  parent={{ id: parent?.id || '', type: parent?.type || '' }}
                  id={uuidv4()}
                  key={uuidv4()}
                  position={index + 1}
                />
              ) : null}
            </>
          );
        }

        // If no corresponding component is found, you can return a default or handle it as needed
        return <div key={item.id}>Unsupported field type: {item.type}</div>;
      })}
    </>
  );
};

export default Reenderizer;
