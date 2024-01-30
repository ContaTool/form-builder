import React, { useEffect, useState } from 'react';

import titleForm from '../forms/titleForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';

interface PropertyEditorProps {
  type?: string;
  onSubmit: (data: any) => void;
}

const formMapping: { [key: string]: any } = {
  title: titleForm,
  card: cardForm,
};

export const PropertyEditor = (props: PropertyEditorProps) => {
  const [form, setForm] = useState();

  useEffect(() => {
    if (props.type) {
      setForm(formMapping[props.type]);
    }
  }, [props.type]);

  if (!form) return <></>;

  return (
    <Form
      isEditing={false}
      form={form}
      onSubmit={props.onSubmit}
      data={{
        label: 'Esto es un texto ',
      }}
    />
  );
};
