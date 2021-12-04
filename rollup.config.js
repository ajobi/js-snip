import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const input = 'src/index.ts'

const plugins = [
  nodeResolve({ extensions: ['.ts'] }),
  babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
  terser()
]

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'JsSnip'
    },
    plugins: plugins
  },
  {
    input,
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()]
  }
]
