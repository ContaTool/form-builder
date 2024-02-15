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
                  label: 'Editar Seleccion unica',
                },
              },
              {
                type: 'detailed',
                props: {
                  name: 'options',
                  children: [
                    {
                      type: 'input',
                      props: {
                        name: 'label',
                        label: 'Nombre de la opcion ',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
