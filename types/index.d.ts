import type { RegisterOptions } from 'react-hook-form';

export {};
declare global {
  type DataFormElement = {
    id?: string;
    type?: string;
    props: {
      label?: string;
      children?: DataFormElement[];
      tabs?: DataFormElement[];
    };
    parent?: string;
    // position: number;
  };

  interface ElementProps extends React.HTMLProps<HTMLElement> {
    element?: DataFormElement;
    name: string;
    validations: RegisterOptions;
  }

  interface ItemProps extends ElementProps {
    isEditing: boolean;
  }

  // Nuevas interfaces.
  type NDataFormElement<T> = {
    id?: string;
    key?: string;
    type: string;
    props: T;
    parent?: { id: string; type: string };
    isEditing?: boolean;
    position?: number;
    detailed?:
      | {
          name: string;
          index: number;
        }
      | undefined;
    children: JSX.Element;
  };
}

// Necesito Types para los diferentes forms.
// Cada item del formulario tiene unas props (generics)
// Estas props son las propiedades del elemento.
// Y a su vez las propiedades del elemento son las mismas que envio al servidor.
// Y esta debe tener una forma que llega al servidor que no tengo claro. Por ejemplo la position o el id, el tipo.

// Los elementos pueden extender html y solo deberian recibir las props
