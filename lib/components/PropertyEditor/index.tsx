import React from 'react';
import Form from '../Form';

import option from '../../forms/formOptions';
import newForm from '../../forms/new';

interface PropertyEditorProps {
  ctx: DataFormElement;
}

const PropertyEditor = ({ ctx }: PropertyEditorProps) => {
  const type = option.options.find((i) => i.value === ctx?.type);

  return (
    <>
      {ctx?.type === 'add' ? (
        <Form isEditing={false} form={newForm.props.children} />
      ) : null}

      {/* <div className="grid  grid-cols-2 gap-4 overflow-y-auto">
        <div className="col-span-2">
          <Title label={`Editar ${type?.label}`}></Title>
        </div>

        <Select label="Tipo de Campo" options={options} />
        <Input label="Nombre del campo"></Input>
        <Input label="Placeholder"></Input>

        <Input label="Valor por defecto"></Input>
        <Input label="Valor para pruebas"></Input>

        <div className="pt-6 pb-4 col-span-2">
          <h3 className="text-lg font-bold">Validaciones</h3>
        </div>

        <Input label="Tamaño maximo"></Input>
        <Input label="Tamaño minimo"></Input>

        <div className="col-span-2">
          <CheckBox label="Este campo es detallado" />
          <CheckBox label="Este campo es requerido" />
        </div>
        <Button>Guardar</Button>
      </div> */}
    </>
  );
};

export default PropertyEditor;
