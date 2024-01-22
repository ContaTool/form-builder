import React from 'react';

import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Reenderizer from '../Reenderizer';
import { FormContext } from '../../context/FormContext';
import { addElementToForm } from '../../helpers';

export interface FormProps {
  clickOnElement?: (params: DataFormElement) => void;
  editElement?: () => void;
  isEditing: boolean;
  form: Array<DataFormElement>;
}

const Form = (props: FormProps) => {
  const form = useForm();

  const clickOnElement = (params: DataFormElement) => {
    props.clickOnElement?.call(null, params);
  };

  const onMyFormSubmit = (data: any) => {
    console.log('formulario enviado', data);
  };

  return (
    <FormContext.Provider value={{ clickOnElement }}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit((data) => onMyFormSubmit(data))}>
          <Reenderizer
            data={props.isEditing ? addElementToForm(props.form) : props.form}
          />
          <button
            className="mb-4
        disabled:opacity-50
        place-self-end
        bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
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
