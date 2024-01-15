import React from 'react';
import Title from '../Title';
import Card from '../Card';
import Input from '../Input';
import Add from '../Add';
import Tabs from '../Tabs';
import Select from '../Select';

export const Recursive = (props: DataFormElement): JSX.Element => {
  let Component;
  if (props.type === 'title') Component = Title;
  if (props.type === 'card') Component = Card;
  if (props.type === 'input') Component = Input;

  if (props.type === 'add') Component = Add;
  if (props.type === 'tabs') Component = Tabs;
  if (props.type === 'select') Component = Select;

  if (!Component) Component = () => <div>Componente Invalido</div>;
  return (
    <Component {...props.props} element={props}>
      {props.props.children?.map((child: DataFormElement, index: number) => (
        <Recursive key={index} {...child} />
      ))}
    </Component>
  );
};

const Reenderizer = ({ data }: { data: DataFormElement[] }) => {
  return data.map((item: DataFormElement, index: number) => (
    <Recursive key={index} {...item} />
  ));
};

export default Reenderizer;
