import options from './formOptions';
import text from './text';
import input from './input';
import paragraph from './paragraph';
import card from './card';

export default [
  {
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
                  dependingForm: 'field_type',
                  validations: {
                    required: 'Este campo es obligatorio',
                  },
                },
              },
              {
                type: 'select',
                props: {
                  name: 'box_size',
                  label: 'Espacios formulario',
                  placholder: 'Cuanto ganas?',
                  options: [
                    { value: 'col-span-1', label: '1' },
                    { value: 'col-span-2', label: '2' },
                    { value: 'col-span-3', label: '3' },
                  ],
                },
              },
              {
                type: 'placeholder',
                props: {
                  for: 'field_type',
                  options: {
                    title: text,
                    input: input,
                    paragraph: paragraph,
                    card: card,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
];
