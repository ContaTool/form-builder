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
                },
              },
              {
                type: 'input',
                props: {
                  name: 'placeholder',
                  label: 'Placeholder',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
