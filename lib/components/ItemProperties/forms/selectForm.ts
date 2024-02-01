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
                  form: [
                    {
                      type: 'container',
                      props: {
                        size: 3,
                        children: [
                          {
                            type: 'input',
                            props: {
                              name: 'opcion',
                              label: 'Opcion label ',
                            },
                          },
                          {
                            type: 'input',
                            props: {
                              name: 'value',
                              label: 'Valor',
                            },
                          },
                          // {
                          //   type: 'button',
                          //   props: {
                          //     label: 'Agregar',
                          //   },
                          // },
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
