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
                  label: 'Editar Titulo',
                },
              },
              {
                type: 'input',
                props: {
                  name: 'label',
                  label: 'Texto',
                  validations: {
                    required: 'Este campo es obligatorio',
                    minLength: {
                      value: 3,
                      message: 'Minimo debes tener 3 carácteres',
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
