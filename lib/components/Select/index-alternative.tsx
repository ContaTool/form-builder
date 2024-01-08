// import React, { useState } from 'react';
// // import 'react-tailwindcss-select/dist/index.css';
// import SelectTW from 'react-tailwindcss-select';
// import type { SelectValue } from 'react-tailwindcss-select/dist/components/type';

// const options = [
//   { value: 'dev', label: '1055 - Developer' },
//   { value: 'fox', label: '🦊 Developer' },
//   { value: 'Butterfly', label: '🦋 Social Media' },
//   { value: 'Honeybee', label: '🐝 Multímedia' },
// ];

// export interface SelectProps {
//   label: string;
//   placeholder?: string;
//   name?: string;
// }

// const Select = (props: SelectProps) => {
//   const [animal, setAnimal] = useState<SelectValue>(null);

//   return (
//     <div className="py-2">
//       <label
//         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//         htmlFor={props.name}
//       >
//         {props.label}
//       </label>

//       <SelectTW
//         primaryColor="pink"
//         noOptionsMessage="No hay resultados"
//         onChange={(value) => {
//           setAnimal(value);
//         }}
//         searchInputPlaceholder="Buscar"
//         placeholder="Selecciona un animal"
//         isSearchable={true}
//         options={options}
//         value={animal}
//         classNames={{
//           menuButton: ({ isDisabled }) =>
//             `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
//               isDisabled
//                 ? 'bg-gray-200'
//                 : 'bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20'
//             }`,
//           menu: 'absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700',
//           listItem: ({ isSelected }) =>
//             `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
//               isSelected
//                 ? `text-white bg-blue-500`
//                 : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
//             }`,
//         }}
//       />

//       <p className="text-red-500 text-xs italic pt-2">
//         Error: Aqui va a un error que vas a mostrar
//         {/* {errors[props.name]?.message?.toString()} */}
//       </p>
//     </div>
//   );
//   // return <div>select</div>;
// };

// export default Select;
