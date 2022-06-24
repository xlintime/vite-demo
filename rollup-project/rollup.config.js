import alias from '@rollup/plugin-alias';
export default [
  {
    input: 'index.js',
    plugin: [],
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/dist.es.js',
      format: 'es',
      plugin: [],
    },
  },
];
