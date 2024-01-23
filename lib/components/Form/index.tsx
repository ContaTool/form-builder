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
  // State
  // const [currentForm, setCurrentForm] = useState([...props.form]);

  // Hooks
  const form = useForm();

  const clickOnElement = (params: DataFormElement) => {
    // console.log('clic', params);
    props.clickOnElement?.call(null, params);
  };

  // useEffect(() => {
  //   // console.log('form has been changed', props.form);
  //   setCurrentForm(props.form);
  // }, [props.form]);

  return (
    <FormContext.Provider value={{ clickOnElement }}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            props.onSubmit({ ...data, formIdentifier: 'abc123' })
          )}
        >
          <Reenderizer data={props.form} />
          <button
            className="mb-4 disabled:opacity-50 place-self-end bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Guardar
          </button>
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
};

export default Form;
