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
                  label: 'Edita placeholder?',
                },
              },
              {
                type: 'input',
                props: {
                  name: 'listen',
                  label: 'Escucha cambios de:',
                },
              },
              {
                type: 'detailed',
                props: {
                  name: 'options',
                  children: [
                    {
                      type: 'container',
                      props: {
                        size: 3,
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
                              name: 'condicional',
                              label: 'Condicional ',
                            },
                          },

                          // {
                          //   type: 'select',
                          //   props: {
                          //     name: 'condicional',
                          //     label: 'condicional',
                          //     option_values: [
                          //       {
                          //         label: 'Mayor',
                          //         value: '>',
                          //       },
                          //       {
                          //         label: 'Mayor o igual',
                          //         value: '>=',
                          //       },
                          //       {
                          //         label: 'Igual',
                          //         value: '===',
                          //       },
                          //       {
                          //         label: 'Diferente',
                          //         value: '!==',
                          //       },
                          //       {
                          //         label: 'Menor',
                          //         value: '<',
                          //       },
                          //       {
                          //         label: 'Menor o igual',
                          //         value: '<=',
                          //       },
                          //     ],
                          //   },
                          // },

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
