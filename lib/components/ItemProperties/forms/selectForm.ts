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
                  label: 'Editar selector',
                },
              },
              {
                type: 'input',
                props: {
                  name: 'label',
                  label: 'Etiqueta',
                },
              },
              {
                type: 'detailed',
                props: {
                  name: 'options',
                  template: [
                    {
                      type: 'input',
                      props: {
                        name: 'label',
                        label: 'Etiqueta ',
                      },
                    },
                    {
                      type: 'input',
                      props: {
                        name: 'value',
                        label: 'Valor',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
