import React, { useEffect, useState } from 'react';

import titleForm from '../forms/titleForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';

interface PropertyEditorProps {
  type: string;
}

const formMapping: { [key: string]: any } = {
  title: titleForm,
  card: cardForm,
};

export const PropertyEditor = (props: PropertyEditorProps) => {
  const [form, setForm] = useState();

  const handleSubmit = () => {
    console.log('Submitted');
  };

  useEffect(() => {
    console.log('setted prop type', props.type);
    if (props.type) {
      console.log(props.type);
      console.log('setted', formMapping[props.type]);
      setForm(formMapping[props.type]);
    }
  }, [props.type]);

  if (!form) return <></>;

  return <Form isEditing={false} form={form} onSubmit={handleSubmit} />;
};

// const type = option.options.find((i) => i.value === ctx?.type);
// console.log('context ', ctx);
// const handleSubmit = (data) => {
//   // Create element from form
//   const d = { ...data };
//   delete d.type;
//   onSubmit({
//     id: ctx.id,
//     type: data.type,
//     props: {
//       ...d,
//     },
//     position: ctx.position,
//     parent: ctx.parent,
//   });
// };
// return (
//   <>
//     {ctx?.type === 'add' ? (
//       <Form isEditing={false} form={newForm} onSubmit={handleSubmit} />
//     ) : null}
//   </>
// );
