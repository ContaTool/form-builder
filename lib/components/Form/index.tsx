import React from 'react';
import Reenderizer from '../Reenderizer';
import { FormContext } from '../../context/FormContext';
import { addElementToForm } from '../../helpers';

export interface FormProps {
  clickOnElement?: (params: DataFormElement) => void;
  editElement: () => void;
  isEditing: boolean;
  form: Array<DataFormElement>;
}

const Form = (props: FormProps) => {
  const clickOnElement = (params: DataFormElement) => {
    props.clickOnElement?.call(null, params);
  };

  return (
    <FormContext.Provider value={{ clickOnElement }}>
      <form>
        <Reenderizer data={addElementToForm(props.form)} />
      </form>
    </FormContext.Provider>
  );
};

export default Form;
