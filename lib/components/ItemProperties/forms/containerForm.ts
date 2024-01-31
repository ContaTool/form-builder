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
                  label: 'Editar Contenedor',
                },
              },
              {
                type: 'select',
                props: {
                  label: 'Columnas',
                  name: 'size',
                  options: [
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
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
