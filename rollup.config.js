import sass from "rollup-plugin-sass";
// import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    // commonjs({
    //   include: ["node_modules/**", "src/*"],
    //   exclude: ["**/*.stories.js"],
    //   namedExports: {
    //     "node_modules/react/react.js": [
    //       "Children",
    //       "Component",
    //       "PropTypes",
    //       "createElement"
    //     ],
    //     "node_modules/react-dom/index.js": ["render"]
    //   }
    // }),
    sass({
      insert: true
    })
  ]
};