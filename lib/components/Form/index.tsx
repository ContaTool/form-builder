import React, { useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Reenderizer from '../Reenderizer';
import { useStore } from '../../hooks/useStore';

interface Form {
  form: any;
  defaultValues: any;
  isEditing: boolean;
  children: JSX.Element;
  onSubmit: (data: any) => void;
}

const Form = (props: Form) => {
  // Hooks

  const setForm = useStore((state) => state.setForm);

  const form = useForm({
    defaultValues: props.defaultValues,
  });

  useEffect(() => {
    if (props.isEditing) {
      setForm(props.form);
    }
  }, [props.form]);

  // Properties
  const handleSubmit = (data) => {
    console.log(data);
    props.onSubmit({ ...data });
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
