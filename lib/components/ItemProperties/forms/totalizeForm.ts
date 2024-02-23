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
                  label: 'Editar Total',
                },
              },
              {
                type: 'input',
                props: {
                  name: 'label',
                  label: 'Texto antes del total',
                  validations: {
                    required: 'Este campo es obligatorio',
                    minLength: {
                      value: 3,
                      message: 'Minimo debes tener 3 carácteres',
                    },
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
