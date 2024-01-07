import React from 'react';
import Reenderizer from '../Reenderizer';

export type FormElement = {
  type: string;
  props: {
    label: string;
    children: any;
  };
};

export interface FormProps {
  isEditing: boolean;
  form: Array<Element>;
}

const Form = (props: FormProps) => {
  return (
    <form>
      <Reenderizer data={props.form} />
    </form>
  );
};

export default Form;
