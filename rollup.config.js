import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";

const packageJson = require("./package.json");

export default [
  // Library Build
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.unpkg,
        format: "umd",
        name: "mess",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css"],
        extract: "styles.css",
        minimize: true,
      }),
      terser(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
    ],
    external: ["react", "react-dom"],
  },

  // CLI Build
  {
    input: "src/core/cli.ts",
    output: {
      file: "dist/cli.js",
      format: "cjs",
      banner: "#!/usr/bin/env node", // Add shebang for CLI
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
    ],
    external: ["fs", "path", "os"], // Include any Node.js built-ins here
  },

  // TypeScript Declarations
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];