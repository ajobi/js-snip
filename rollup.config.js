import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const input = 'src/index.ts'

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: [esbuild({ minify: true })]
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'JsSnip'
    },
    plugins: [esbuild({ minify: true })]
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
