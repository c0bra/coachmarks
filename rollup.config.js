import { merge } from 'lodash';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import string from 'rollup-plugin-string';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: {
    file: pkg.browser,
    format: 'umd',
  },
  name: 'coachmarks',
  sourcemap: true,
  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    // postcss({
    //   plugins: [
    //   // cssnext(),
    //   // yourPostcssPlugin()
    //   ],
    // // sourceMap: false, // default value
    // // extract: false, // default value
    //   extensions: ['.css', '.sss'],  // default value
    // // parser: sugarss
    // }),
    scss({
      output: false,
    }),
    // postcss(),
    string({
      include: 'src/**/*.{svg,html}',
    }),
    filesize(),
  ],
};

export default [
  merge({}, config, {
    plugins: [
      process.env.DEV ? serve({
        open: true,
        contentBase: ['test', 'dist'],
      }) : undefined,
    ],
  }),
  merge({}, config, {
    output: {
      file: 'dist/coachmarks.min.js',
      format: 'umd',
    },
    plugins: [
      uglify({ sourceMap: true }, minify),
    ],
  }),
];
