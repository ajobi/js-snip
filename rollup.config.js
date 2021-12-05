import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import serve from 'rollup-plugin-serve'
import pkg from './package.json'

const input = 'src/index.ts'

const plugins = [
  nodeResolve({ extensions: ['.ts'] }),
  babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
  terser(),
  ...(process.env.NODE_ENV === 'development' ? [serve({ port: 3000, contentBase: 'docs', open: true })] : [])
]

export default [
  {
    input,
    output: [
      {
        file: pkg.module,
        format: 'esm'
      },
      {
        file: pkg.main,
        format: 'umd',
        name: 'JsSnip'
      },
      {
        file: pkg.main.replace('dist', 'docs'),
        format: 'umd',
        name: 'JsSnip'
      }
    ],
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
