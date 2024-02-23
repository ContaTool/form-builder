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
                type: 'textarea',
                props: {
                  name: 'guide_text',
                  label: 'Texto guia para el usuario',
                },
              },
              {
                type: 'detailed',
                props: {
                  name: 'option_values',
                  children: [
                    {
                      type: 'container',
                      props: {
                        size: 2,
                        children: [
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
      ],
    },
  },
];
