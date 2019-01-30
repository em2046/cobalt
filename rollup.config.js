import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/main.ts',
  output: {
    file: './dist/cobalt.esm.js',
    format: 'esm'
  },
  external: ['react'],
  plugins: [
    resolve(),
    typescript({
      jsx: 'react'
    })
  ]
};
