import React, { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import { FormContextProvider } from '../../context/FormContext';
import Tabs from '../Tabs';
import Reenderizer from '../Reenderizer';

const Form = (props) => {
  const [sum, setSum] = useState<number>(0);

  // Hooks
  const form = useForm({});

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContextProvider>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit((data) => handleSubmit(data))}>
          <Reenderizer data={props.form} isEditing={props.isEditing} />
          {/* {props.children} */}
        </form>
        <p>{sum}</p>
        <button onClick={() => setSum((prev) => prev + 1)}>Boton </button>
      </FormProvider>
    </FormContextProvider>
  );
};

export default Form;
