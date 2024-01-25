import type { RegisterOptions } from 'react-hook-form';

export {};
declare global {
  type DataFormElement = {
    id?: string;
    type: string;
    props: {
      label?: string;
      children?: DataFormElement[];
      tabs?: DataFormElement[];
    };
    parent?: string;
    position: number;
  };

  interface ElementProps extends React.HTMLProps<HTMLElement> {
    element?: DataFormElement;
    name: string;
    validations: RegisterOptions;
  }
}
