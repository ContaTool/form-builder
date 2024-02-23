export default [
  {
    type: 'root',
    props: {
      children: [
        {
          type: 'card',
          props: {
            children: [
              {
                type: 'title',
                props: {
                  label: 'Editar campo de texto',
                },
              },
              {
                type: 'input',
                props: {
                  name: 'label',
                  label: 'Etiqueta',
                },
              },
              // {
              //   type: 'input',
              //   props: {
              //     name: 'placeholder',
              //     label: 'Placeholder',
              //   },
              // },
              {
                type: 'select',
                props: {
                  label: 'Formato',
                  name: 'format',
                  option_values: [
                    { value: 'texto', label: 'Texto' },
                    { value: 'numeric', label: 'Númerico' },
                    { value: 'financial', label: 'Financiero' },
                    { value: 'date', label: 'Fecha' },
                  ],
                },
              },
              {
                type: 'textarea',
                props: {
                  name: 'guide_text',
                  label: 'Texto guia para el usuario',
                },
              },
              {
                type: 'checkbox',
                props: {
                  name: 'numeric',
                  label: 'Utilizar en las formulas?',
                },
              },
              {
                type: 'checkbox',
                props: {
                  name: 'totalize',
                  label: 'Es Totalizable',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
