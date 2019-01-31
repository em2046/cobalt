import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

export default {
  input: './src/main.ts',
  output: {
    file: './dist/cobalt.esm.js',
    format: 'esm'
  },
  external: ['react'],
  plugins: [
    url(),
    svgr(),
    resolve(),
    typescript({
      jsx: 'react'
    })
  ]
};
