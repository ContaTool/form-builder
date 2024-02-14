import React, { useContext, useEffect, useState } from 'react';

import titleForm from '../forms/titleForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';
import paragraphForm from '../forms/paragraphForm';
import containerForm from '../forms/containerForm';
import inputForm from '../forms/inputForm';
// import { useItemSelected } from '../../../hooks/useItemSelected';
import selectForm from '../forms/selectForm';
import tabsForm from '../forms/tabsForm';
import detailedForm from '../forms/detailedForm';
import textAreaForm from '../forms/textAreaForm';

import { FormContext } from '../../../context/FormContext';

interface PropertyEditorProps {
  onSubmit: (data: any) => void;
}

const formMapping: { [key: string]: any } = {
  title: titleForm,
  card: cardForm,
  paragraph: paragraphForm,
  container: containerForm,
  input: inputForm,
  select: selectForm,
  tabs: tabsForm,
  detailed: detailedForm,
  textarea: textAreaForm,
};

export const PropertyEditor = (props: PropertyEditorProps) => {
  // States
  const [form, setForm] = useState<NDataFormElement<any>[] | null>([]);
  const ctx = useContext(FormContext);

  if (!ctx) {
    throw new Error('Cannot find Form context provider');
  }

  useEffect(() => {
    setForm(null);
    setTimeout(() => {
      setForm(formMapping[ctx.selectedItem()?.type]);
    }, 1);
  }, [ctx.selectedItem]);

  const deleteItem = () => {
    // try {
    //   props.deleteItem(props.item);
    //   selectItem(null);
    // } catch (error) {}
    //
    //
    // Buscar y eliminar por el id
  };

  if (!form) return <></>;

  return (
    <Form
      propertyEditor={true}
      isEditing={false}
      form={form}
      onSubmit={props.onSubmit}
      defaultValues={ctx.selectedItem()}
    >
      <div className="flex flex-row justify-end">
        <button
          onClick={deleteItem}
          className="mb-4 disabled:opacity-50 place-self-end bg-red-500
          hover:bg-red-700 text-white font-bold py-2 px-4 rounded
            inline-flex items-center me-2"
          type="button"
        >
          Eliminar
        </button>

        <button
          className="mb-4 disabled:opacity-50 place-self-end bg-black
          hover:bg-gray-700 text-white font-bold py-2 px-4 rounded
            inline-flex items-center"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </Form>
  );
};
