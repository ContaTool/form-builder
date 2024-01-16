import React from 'react';
import Title from '../Title';
import Input from '../Input';
import Select from '../Select';
import CheckBox from '../CheckBox';
import Button from '../Button';

const options = [
  { value: 'titulo', label: 'Título' },
  { value: 'parrafo', label: 'Parrafo' },
  { value: 'tab', label: 'Tab' },
  { value: 'input_date', label: 'Campo de Fecha' },
  { value: 'input', label: 'Campo de texto' },
  { value: 'card', label: 'Tarjeta' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'radio_button', label: 'Selector unico' },
];

interface PropertyEditorProps {
  ctx: DataFormElement;
}

const PropertyEditor = ({ ctx }: PropertyEditorProps) => {
  console.log('ctx', ctx);

  return (
    <form>
      <div className="grid  grid-cols-2 gap-4 overflow-y-auto">
        <div className="col-span-2">
          <Title label="Editar Campo de Texto"></Title>
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
      </div>
    </form>
  );
};

export default PropertyEditor;
