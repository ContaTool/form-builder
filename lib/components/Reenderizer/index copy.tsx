import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from '../Title';
import Card from '../Card';
import Input from '../Input';
import Add from '../Add';
import Tabs from '../Tabs';
import Select from '../Select';
import TextArea from '../TextArea';
import { replacePlaceholder } from '../../helpers';

export const Recursive = (props: DataFormElement): JSX.Element => {
  // It this its performant if before check if element have childrens

  // console.log('has to render ', props);

  let Component;

  if (props.type === 'placeholder' || props.type === 'empty_block')
    Component = () => <div></div>;
  if (props.type === 'title') Component = Title;
  if (props.type === 'card') Component = Card;
  if (props.type === 'input') Component = Input;
  if (props.type === 'textarea') Component = TextArea;

  if (props.type === 'add') Component = Add;
  if (props.type === 'tabs') Component = Tabs;
  if (props.type === 'select') Component = Select;

  if (!Component) Component = () => <div>Componente Invalido {props.type}</div>;
  return (
    <Component {...props.props} element={props} test={props.test}>
      {props.props.children?.map((child: DataFormElement) => (
        <Recursive key={uuidv4()} {...child} test={props.test} />
      ))}
    </Component>
  );
};

const Reenderizer = ({ data }: { data: DataFormElement[] }) => {
  const [elements, setElements] = useState(data);

  const test = (option: string) => {
    setElements([...replacePlaceholder(data, 'field_type', option)]);
  };

  return elements.map((item: DataFormElement) => {
    return <Recursive key={uuidv4()} {...item} test={test} />;
  });
};

export default Reenderizer;
