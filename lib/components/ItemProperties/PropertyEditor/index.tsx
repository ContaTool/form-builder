import React, { useContext, useEffect, useState } from 'react';

import titleForm from '../forms/titleForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';

interface PropertyEditorProps {
  item: NDataFormElement<any>;
  onSubmit: (data: any) => void;
}

const formMapping: { [key: string]: any } = {
  title: titleForm,
  card: cardForm,
};

export const PropertyEditor = (props: PropertyEditorProps) => {
  // States
  const [form, setForm] = useState<NDataFormElement<any> | null>();

  useEffect(() => {
    setForm(null);
    setTimeout(() => {
      setForm(formMapping[props.item?.type]);
    }, 1);
  }, [props.item]);

  if (!form) return <></>;

  return (
    <Form
      isEditing={false}
      form={form} //FIXME: Invalid type
      onSubmit={props.onSubmit}
      data={props.item.props}
    />
  );
};
