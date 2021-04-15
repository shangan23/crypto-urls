import { babel } from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: false,
      preserveModules: true,
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'esm',
      name: pkg.name,
      sourcemap: false,
    },
  ],
  plugins: [
    external(),
    babel({
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    commonjs()
  ],
}
