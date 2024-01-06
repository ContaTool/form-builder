import swc from '@rollup/plugin-swc';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

import packageJson from './package.json' assert { type: 'json' };

export default {
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
    swc(), // Plugin para manejar TypeScript con SWC
    typescript(),
    resolve(), // Permite Rollup resolver módulos de Node.js
    commonjs(), // Convierte módulos de CommonJS a ES6
    // livereload('dist'), // Actualiza el navegador automáticamente en desarrollo
  ],
};
