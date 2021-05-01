import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts"

const input = "src/index.ts"
import pkg from "./package.json"

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
    },
    plugins: [esbuild({ minify: true })],
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "umd",
      name: 'ReactSnip'
    },
    plugins: [esbuild({ minify: true })],
  },
  {
    input,
    output: {
      file: "dist/index.d.ts",
      format: "esm"
    },
    plugins: [dts()]
  },
]
