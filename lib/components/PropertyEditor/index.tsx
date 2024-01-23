import React from 'react';
import Form from '../Form';

import option from '../../forms/formOptions';
import newForm from '../../forms/new';

interface PropertyEditorProps {
  ctx: DataFormElement;
  onSubmit: (data) => {};
}

const PropertyEditor = ({ ctx, onSubmit }: PropertyEditorProps) => {
  const type = option.options.find((i) => i.value === ctx?.type);

  // console.log('context ', ctx);

  const handleSubmit = (data) => {
    // Create element from form
    const d = { ...data };
    delete d.type;

    onSubmit({
      id: ctx.id,
      type: data.type,
      props: {
        ...d,
      },
    });
  };

  return (
    <>
      {ctx?.type === 'add' ? (
        <Form
          isEditing={false}
          form={newForm.props.children}
          onSubmit={handleSubmit}
        />
      ) : null}
    </>
  );
};

export default PropertyEditor;
