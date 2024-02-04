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
                  label: 'Editar Tabs',
                },
              },
              {
                type: 'detailed',
                props: {
                  name: 'tabs',
                  children: [
                    {
                      type: 'input',
                      props: {
                        name: 'label',
                        label: 'Etiqueta ',
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
