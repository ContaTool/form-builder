export {};
declare global {
  type DataFormElement = {
    type: string;
    props: {
      label?: string;
      children?: DataFormElement[];
      tabs?: DataFormElement[];
    };
  };

  interface ElementProps extends React.HTMLProps<HTMLElement> {
    element: DataFormElement;
  }
}
