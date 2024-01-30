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
                },
              },
              {
                type: 'textarea',
                props: {
                  name: 'description',
                  label: 'Texto de ayuda al usuario',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
