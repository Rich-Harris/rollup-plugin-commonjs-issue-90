// rollup.config.js
const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const globals = require('rollup-plugin-node-globals');
const nodeResolve = require('rollup-plugin-node-resolve');

export default {
  entry: 'src/main.js',
  dest: 'bundle.js',
  format: 'iife',
  moduleName: 'test',
  sourceMap: true,
  plugins: [
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/handlebars/dist/handlebars.min.js': ['handlebars']
      }
    }),
    globals(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false,
      skip: [ 'source-map' ]
    }),
    replace({ 'require.extensions': 'null' })
  ],
  external: [ 'source-map' ],
  globals: {
    path: '{}',
    fs: '{}',
    'source-map': '{}'
  }
};
