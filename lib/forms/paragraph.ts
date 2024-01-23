export default [
  {
    type: 'textarea',
    props: {
      label: 'Texto del campo',
      name: 'text',
      validations: {
        required: 'Este campo es obligatorio',
        minLength: {
          value: 10,
          message: 'Minimo debes tener 10 caracteres',
        },
      },
    },
  },
];
