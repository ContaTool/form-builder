import React, { useContext, useEffect, useState } from 'react';

import titleForm from '../forms/titleForm';
import placeholderForm from '../forms/placeholderForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';
import paragraphForm from '../forms/paragraphForm';
import containerForm from '../forms/containerForm';
import inputForm from '../forms/inputForm';

import selectForm from '../forms/selectForm';
import tabsForm from '../forms/tabsForm';
import detailedForm from '../forms/detailedForm';
import textAreaForm from '../forms/textAreaForm';

import { FormContext } from '../../../context/FormContext';
import radioForm from '../forms/radioForm';
import checkboxForm from '../forms/checkboxForm';
import subtitleForm from '../forms/subtitleForm';
import { decodeElement } from '../../../helpers';
import totalizeForm from '../forms/totalizeForm';

interface PropertyEditorProps {
  onSubmit: (data: any) => void;
  deleteItem: (id: string) => void;
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
  radio_buttons: radioForm,
  checkbox: checkboxForm,
  subtitle: subtitleForm,
  totalize: totalizeForm,
  placeholder: placeholderForm,
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

  if (!form) return <></>;

  console.log('decodeElement(ctx.selectedItem()', ctx.selectedItem());

  return (
    <Form
      propertyEditor={true}
      isEditing={false}
      form={form}
      onSubmit={props.onSubmit}
      defaultValues={decodeElement(ctx.selectedItem())}
    >
      <div className="flex flex-row justify-end">
        <button
          onClick={props.deleteItem}
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
