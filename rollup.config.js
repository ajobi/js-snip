import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import dts from "rollup-plugin-dts";

const input = "src/index.ts";
import pkg from "./package.json";

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
    },
    plugins: [typescript({ typescript: require("typescript") }), uglify()],
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "umd",
      name: 'ReactSnip'
    },
    plugins: [typescript({ typescript: require("typescript") }), uglify()],
  },
  {
    input,
    output: {
      file: "dist/index.d.ts",
      format: "esm"
    },
    plugins: [dts()]
  },
];
