import React from 'react';
import Reenderizer from '../Reenderizer';

import { addElementToForm } from '../../helpers/index.js';

export type FormElement = {
  type: string;
  props: {
    label: string;
    children: any;
  };
};

export interface FormProps {
  isEditing: boolean;
  form: Array<FormElement>;
}

const Form = (props: FormProps) => {
  return (
    <form>
      <Reenderizer data={addElementToForm(props.form)} />
    </form>
  );
};

export default Form;
