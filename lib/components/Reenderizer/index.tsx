import React, { useEffect, useState } from 'react';
import Title from '../Title';
import Card from '../Card';
import Input from '../Input';
import Add from '../Add';
import Tabs from '../Tabs';
import Select from '../Select';
import { replacePlaceholder } from '../../helpers';

export const Recursive = (props: DataFormElement): JSX.Element => {
  let Component;
  if (props.type === 'placeholder') Component = () => <div></div>;
  if (props.type === 'title') Component = Title;
  if (props.type === 'card') Component = Card;
  if (props.type === 'input') Component = Input;

  if (props.type === 'add') Component = Add;
  if (props.type === 'tabs') Component = Tabs;
  if (props.type === 'select') Component = Select;

  if (!Component) Component = () => <div>Componente Invalido {props.type}</div>;
  return (
    <Component {...props.props} element={props} test={props.test}>
      {props.props.children?.map((child: DataFormElement, index: number) => (
        <Recursive key={index} {...child} test={props.test} />
      ))}
    </Component>
  );
};

const Reenderizer = ({ data }: { data: DataFormElement[] }) => {
  const [ele, setEle] = useState(data);

  const test = (option: string) => {
    setEle([
      ...replacePlaceholder(ele, 'field_type', {
        type: 'input',
        props: {
          label: 'Texto del campo',
          name: 'name',
          validations: {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 10,
              message: 'Minimo debes tener 10 caracteres',
            },
          },
        },
      }),
    ]);
  };

  return ele.map((item: DataFormElement, index: number) => {
    return <Recursive key={index} {...item} test={test} />;
  });
};

export default Reenderizer;
