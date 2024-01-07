import React from 'react';
import { FormElement } from '../Form';
import Title, { TitleProps } from '../Title';
import Card, { CardProps } from '../Card';
import Input from '../Input';

const Components = {
  title: Title,
  card: Card,
};

const Recursive = (props: FormElement) => {
  let Component;
  if (props.type === 'title') Component = Title;
  if (props.type === 'card') Component = Card;
  if (props.type === 'input') Component = Input;
  if (!Component) return;

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
