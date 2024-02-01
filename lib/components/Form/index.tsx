import React, { useEffect, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Reenderizer from '../Reenderizer';

export interface FormProps {
  // FIXME: INTERFACE DISORGANIZED
  children: JSX.Element;
  clickOnElement?: (params: DataFormElement) => void;
  isEditing: boolean;
  data?: any;
  form: NDataFormElement<any>[];
  onSubmit: (data: any) => void;
}

const Form = (props: FormProps) => {
  // Hooks
  const form = useForm({
    defaultValues: props.data,
  });

  const handleSubmit = (data) => {
    // FIXME: Se queda submitting despues de que se envia
    // if (!form.formState.isSubmitting) {
    props.onSubmit({ ...data });
    // }
    console.log('is submitting?', form.formState.isSubmitting);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((data) => handleSubmit(data))}>
        <Reenderizer data={props.form} isEditing={props.isEditing} />
        {props.children}
      </form>
    </FormProvider>
  );
};

export default Form;
