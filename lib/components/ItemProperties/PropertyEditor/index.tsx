import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

import titleForm from '../forms/titleForm';

import Form from '../../Form';
import cardForm from '../forms/cardForm';
import paragraphForm from '../forms/paragraphForm';
import containerForm from '../forms/containerForm';
import inputForm from '../forms/inputForm';
import { useItemSelected } from '../../../hooks/useItemSelected';
import selectForm from '../forms/selectForm';

interface PropertyEditorProps {
  item: NDataFormElement<any>;
  onSubmit: (data: any) => void;
  deleteItem: (data: NDataFormElement<any>) => void;
}

const formMapping: { [key: string]: any } = {
  title: titleForm,
  card: cardForm,
  paragraph: paragraphForm,
  container: containerForm,
  input: inputForm,
  select: selectForm,
};

export const PropertyEditor = (props: PropertyEditorProps) => {
  // States
  const [form, setForm] = useState<NDataFormElement<any> | null>();
  const { selectItem } = useItemSelected();

  useEffect(() => {
    setForm(null);
    setTimeout(() => {
      setForm(formMapping[props.item?.type]);
    }, 1);
  }, [props.item]);

  const deleteItem = () => {
    try {
      props.deleteItem(props.item);
      selectItem(null);
    } catch (error) {}
  };

  if (!form) return <></>;

  return (
    <Form
      isEditing={false}
      form={form} //FIXME: Invalid type
      onSubmit={props.onSubmit}
      // isSubmitting={handleIsSubmitting}
      data={props.item.props}
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
