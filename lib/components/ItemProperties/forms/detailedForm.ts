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
                  label: 'Editar campo detallado',
                },
              },
              {
                type: 'checkbox',
                props: {
                  name: 'totalizar',
                  label: 'Totalizar',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
