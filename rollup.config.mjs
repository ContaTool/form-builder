import swc from '@rollup/plugin-swc';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

import livereload from 'rollup-plugin-livereload';
import path from 'path';

import packageJson from './package.json' assert { type: 'json' };
import tailwindConfig from './tailwind.config.js';
import autoprefixer from 'autoprefixer';
// const tailwindConfig = require('./tailwind.config.js');

export default [
  {
    input: 'src/index.tsx', // Ruta del archivo de entrada TypeScript
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
      postcss({
        config: {
          path: './postcss.config.js',
        },
        minimize: true,
        // extract: true,
        extensions: ['.css'],
        plugins: [tailwindcss(tailwindConfig), autoprefixer()],
      }),
      swc(), // Plugin para manejar TypeScript con SWC
      typescript(),
      commonjs(), // Convierte módulos de CommonJS a ES6
      resolve(), // Permite Rollup resolver módulos de Node.js
    ],
  },
];
