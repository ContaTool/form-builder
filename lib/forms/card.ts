// Title form
export default [
  {
    type: 'input',
    props: {
      label: 'Titulo de la tarjeta',
      name: 'label',
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
