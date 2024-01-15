import React from 'react';
import Reenderizer from '../Reenderizer';
import { FormContext } from '../../context/FormContext';
import { addElementToForm } from '../../helpers';

export interface FormProps {
  addNewElement?: () => number;
  isEditing: boolean;
  form: Array<FormElement>;
}

const Form = (props: FormProps) => {
  const addNewElement = () => {
    props.addNewElement?.call(null);
  };

  return (
    <FormContext.Provider value={{ addNewElement }}>
      <form>
        <Reenderizer data={addElementToForm(props.form)} />
      </form>
    </FormContext.Provider>
  );
};

export default Form;
