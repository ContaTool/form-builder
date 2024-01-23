import React from 'react';
import Form from '../Form';

import option from '../../forms/formOptions';
import newForm from '../../forms/new';

interface PropertyEditorProps {
  ctx: DataFormElement;
  onSubmit: () => {};
}

const PropertyEditor = ({ ctx, onSubmit }: PropertyEditorProps) => {
  const type = option.options.find((i) => i.value === ctx?.type);

  return (
    <>
      {ctx?.type === 'add' ? (
        <Form
          isEditing={false}
          form={newForm.props.children}
          onSubmit={onSubmit}
        />
      ) : null}
    </>
  );
};

export default PropertyEditor;
