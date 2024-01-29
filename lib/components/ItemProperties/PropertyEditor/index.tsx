import React from 'react';

import newForm from '../../../forms/new';
import Form from '../../Form';

export const PropertyEditor = () => {
  const handleSubmit = () => {
    console.log('Submitted');
  };

  return <Form isEditing={false} form={newForm} onSubmit={handleSubmit} />;
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
