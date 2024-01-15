export {};
declare global {
  type FormElement = {
    type: string;
    props: {
      label?: string;
      children?: FormElement[];
      tabs?: FormElement[];
    };
  };
}
