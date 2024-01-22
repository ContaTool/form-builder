export default [
  {
    type: 'input',
    props: {
      label: 'Nombre del campo',
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
  {
    type: 'input',
    props: {
      label: 'Placeholder',
      name: 'placholder',
    },
  },
  {
    type: 'input',
    props: {
      label: 'Valor por defecto',
      name: 'default_value',
    },
  },
  {
    type: 'input',
    props: {
      label: 'Valor para pruebas internas',
      name: 'test_value',
    },
  },
  // Validacionses
  {
    type: 'input',
    props: {
      label: 'Valor maximo',
      name: 'max_value',
    },
  },
  {
    type: 'input',
    props: {
      label: 'Valor minimo',
      name: 'min_value',
    },
  },
];