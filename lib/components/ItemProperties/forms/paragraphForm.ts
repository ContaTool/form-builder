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
                  label: 'Editar Parrafo',
                },
              },
              {
                type: 'textarea',
                props: {
                  name: 'text',
                  label: 'Texto',
                  validations: {
                    required: 'Este campo es obligatorio',
                    minLength: {
                      value: 10,
                      message: 'Minimo debes tener 10 carácteres',
                    },
                  },
                },
              },
              {
                type: 'textarea',
                props: {
                  name: 'guide_text',
                  label: 'Texto guia para el usuario',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
