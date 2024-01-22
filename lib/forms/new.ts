import options from './formOptions';
import text from './text';

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
                name: 'field_type',
                dependingForm: {
                  titulo: text,
                },
                validations: {
                  required: 'Este campo es obligatorio',
                },
              },
            },
            {
              type: 'placeholder',
              props: {
                for: 'field_type',
              },
            },
          ],
        },
      },
    ],
  },
};
