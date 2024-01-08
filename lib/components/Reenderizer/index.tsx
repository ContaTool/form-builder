import React from 'react';
import type { FormElement } from '../Form';
import Title from '../Title';
import Card from '../Card';
import Input from '../Input';
import Add from '../Add';
import Tabs from '../Tabs';
import Select from '../Select';

export const Recursive = (props: FormElement) => {
  let Component;
  if (props.type === 'title') Component = Title;
  if (props.type === 'card') Component = Card;
  if (props.type === 'input') Component = Input;
  if (props.type === 'add') Component = Add;
  if (props.type === 'tabs') Component = Tabs;
  if (props.type === 'select') Component = Select;

  if (!Component) Component = () => <div>componente invalido</div>;

  return (
    <Component {...props.props}>
      {props.props.children?.map((child: FormElement, index: number) => (
        <Recursive key={index} {...child} />
      ))}
    </Component>
  );
};

const Reenderizer = ({ data }: { data: FormElement[] }) => {
  return data.map((item: FormElement, index: number) => (
    <Recursive key={index} {...item} />
  ));
};

export default Reenderizer;
