import React, { useEffect, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Reenderizer from '../Reenderizer';
import { FormContext } from '../../context/FormContext';

export interface FormProps {
  clickOnElement?: (params: DataFormElement) => void;
  editElement?: () => void;
  isEditing: boolean;
  form: Array<DataFormElement>;
  onSubmit: (data: any) => void;
}

const Form = (props: FormProps) => {
  // console.log('form recibido', props.form);

  // State
  // const [currentForm, setCurrentForm] = useState([...props.form]);

  // Hooks
  const form = useForm();

  const clickOnElement = (params: DataFormElement) => {
    props.clickOnElement?.call(null, params);
  };

  return (
    <FormContext.Provider value={{ clickOnElement }}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((data) => props.onSubmit({ ...data }))}
        >
          <Reenderizer data={props.form} isEditing={props.isEditing} />
          {!props.isEditing && (
            <button
              className="mb-4 disabled:opacity-50 place-self-end bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              Guardar
            </button>
          )}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
};

export default Form;
