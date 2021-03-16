import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';
import image from 'rollup-plugin-img';
import pkg from './package.json';

const input = ['src/index.js'];

export default [
  {
    input,
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: 'shareForm',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  },
  {
    input,
    plugins: [nodeResolve()],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'src/styles/input.js',
    output: {
      file: 'dist/output.js',
      format: 'esm',
    },
    plugins: [
      sass({
        output: true,
        output: 'dist/bundle.css',
      }),
    ],
  },
  {
    input: 'src/assets/index.js',
    output: {
      file: 'dist/assets/bundle.js',
    },
    plugins: [
      image({
        limit: 10000,
      }),
    ],
  },
];
