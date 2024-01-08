import swc from '@rollup/plugin-swc';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

import livereload from 'rollup-plugin-livereload';
import path from 'path';

import packageJson from './package.json' assert { type: 'json' };
import tailwindConfig from './tailwind.config.js';
import autoprefixer from 'autoprefixer';
// const tailwindConfig = require('./tailwind.config.js');

export default [
  {
    input: 'lib/index.tsx', // Ruta del archivo de entrada TypeScript
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss(),
      swc(), // Plugin para manejar TypeScript con SWC
      typescript(),
      commonjs(), // Convierte módulos de CommonJS a ES6
      resolve(), // Permite Rollup resolver módulos de Node.js
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'lib/styles.css',
    output: {
      file: 'dist/style.css',
      format: 'es',
    },
    plugins: [
      postcss({
        minimize: true,
        extract: true,
        plugins: [postcssImport(), tailwindcss(tailwindConfig), autoprefixer()],
      }),
    ],
  },
];

// postcss({
//         // config: {
//         //   path: './postcss.config.js',
//         // },

//         // minimize: true,
//         // extract: true,
//         // inject: true, // Inject CSS into the JavaScript bundle
//         // sourceMap: 'inline',
//         extensions: ['.css'],
//         plugins: [tailwindcss(tailwindConfig)],
//       }),
