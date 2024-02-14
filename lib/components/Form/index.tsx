import React, { useEffect, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Reenderizer from '../Reenderizer';
import { useStore } from '../../hooks/useStore';

interface Form {
  form: any;
  defaultValues: any;
}

const Form = (props: Form) => {
  const [sum, setSum] = useState<number>(0);

  console.log('Received form', props);

  // Hooks
  const formData = useStore((state) => state.form);
  const setForm = useStore((state) => state.setForm);

  const form = useForm({
    defaultValues: props.defaultValues?.props,
  });

  console.log('default values', props.defaultValues);

  useEffect(() => {
    if (props.isEditing) {
      setForm(props.form);
    }
  }, [props.form]);

  // Properties
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((data) => handleSubmit(data))}>
        <Reenderizer data={props.form} isEditing={props.isEditing} />
      </form>
      {/* <p>{sum}</p>
      <button onClick={() => setSum((prev) => prev + 1)}>Boton </button> */}
    </FormProvider>
  );
};

export default Form;
