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
                  validations: {
                    required: 'Debes llenar este campo para continuar',
                  },
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
              // {
              //   type: 'placeholder',
              //   props: {
              //     listen: 'format',
              //     options: {
              //       texto: {
              //         children: [
              //           {
              //             type: 'textarea',
              //             props: {
              //               name: 'zzzzz',
              //               label: '1',
              //             },
              //           },
              //         ],
              //       },
              //       numeric: {
              //         children: [
              //           {
              //             type: 'textarea',
              //             props: {
              //               name: '2',
              //               label: '2',
              //               validations: {
              //                 required:
              //                   'Debes llenar este campo para continuar',
              //               },
              //             },
              //           },
              //           {
              //             type: 'textarea',
              //             props: {
              //               name: '3',
              //               label: '3',
              //             },
              //           },
              //         ],
              //       },
              //     },
              //   },
              // },
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
              {
                type: 'checkbox',
                props: {
                  name: 'validations.required',
                  label: 'Campo obligatorio',
                  value: 'Debes rellenar este campo antes de continuar',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
