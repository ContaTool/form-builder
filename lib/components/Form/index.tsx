import React, { useEffect, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Reenderizer from '../Reenderizer';

export interface FormProps {
  // FIXME: INTERFACE DISORGANIZED
  clickOnElement?: (params: DataFormElement) => void;
  isEditing: boolean;
  data?: any;
  form: Array<DataFormElement>;
  onSubmit: (data: any) => void;
}

const Form = (props: FormProps) => {
  // Hooks
  const form = useForm({
    defaultValues: props.data,
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((data) => props.onSubmit({ ...data }))}>
        <Reenderizer data={props.form[0]} isEditing={props.isEditing} />
        {!props.isEditing && (
          <button
            className="mb-4 disabled:opacity-50 place-self-end bg-black
          hover:bg-gray-700 text-white font-bold py-2 px-4 rounded 
            inline-flex items-center"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Guardar
          </button>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;
