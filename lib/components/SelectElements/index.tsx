import React, { useContext } from 'react';
import Select from '../Select';
import { FormContext } from '../../context/FormContext';

interface SelectElementsProps {}

export const SelectElements = (
  props: NDataFormElement<SelectElementsProps>
) => {
  // Get the context and inject the options
  const formCtx = useContext(FormContext);

  if (!formCtx) {
    throw new Error('Form context must be implemented to use this component');
  }

  const extractChildren = (element: any, result = []) => {
    // If the element has children, recursively extract them

    if (element.props && element.props.children) {
      // Add children to the result array
      element.props.children.forEach((child) => {
        if (!child.props.children) {
          result.push(child);
        }

        // Remove to listen its own child
        if (child.id !== formCtx.selectedItem().id) {
          // Recursively extract children of each child
          extractChildren(child, result);
        }
      });
    }
    return result;
  };

  const interferedProps = {
    ...props,
    props: {
      ...props.props,
      option_values: [...extractChildren(formCtx.form[0])]
        .map((element) => ({
          label: element.props.label ?? '',
          value: element.props.name ?? '',
        }))
        .filter((i) => i.value !== ''),
    },
  };

  return <Select {...interferedProps} />;
};

// option_values?: { value: string; label: string }[];
