'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var terser = require('@rollup/plugin-terser');
var postcss = require('rollup-plugin-postcss');
var autoprefixer = require('autoprefixer');

var rollup_config_umd = {
  input: 'src/index.ts',
  output: {
    file: 'dist/mess.umd.js',
    format: 'umd',
    name: 'mess',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    postcss({
      plugins: [autoprefixer()],
      extract: 'styles.css',
      minimize: true,
    }),
    terser()
  ]
};

exports.default = rollup_config_umd;
