import options from './formOptions';
import text from './text';
import input from './input';
import paragraph from './paragraph';

export default {
  type: 'root',
  props: {
    children: [
      {
        type: 'card',
        props: {
          label: 'Nuevo campo',
          children: [
            {
              type: 'select',
              props: {
                label: 'Tipo de Campo',
                options: options.options,
                name: 'type',
                dependingForm: {
                  titulo: text,
                },
                validations: {
                  required: 'Este campo es obligatorio',
                },
              },
            },
            { type: 'empty_block', props: {} },
            {
              type: 'placeholder',
              props: {
                for: 'field_type',
                options: {
                  title: text,
                  input: input,
                  paragraph: paragraph,
                },
              },
            },
          ],
        },
      },
    ],
  },
};
