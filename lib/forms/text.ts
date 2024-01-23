export default [
  {
    type: 'input',
    props: {
      label: 'Texto del campo',
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

// {
//   key,
//   type: 'title',
//   props: {
//     label: "I'm a title",
//   },
// },
