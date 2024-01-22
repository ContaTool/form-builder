export default [
  {
    type: 'input',
    props: {
      label: 'Texto del campo',
      name: 'name',
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
