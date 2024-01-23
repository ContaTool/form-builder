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

  console.log('context ', ctx);

  const handleSubmit = (data) => {
    onSubmit({ ...data, id: ctx.id });
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
