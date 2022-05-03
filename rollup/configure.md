# Rollup configuratoin file
Rollup configuration file are optional, but they are powerful and convenient and thus  **recomonded**.

**`Example:`**
```
export default {
    input: 'src/index.js',
    output: {
        file:'bundle.js',
        format:'iife' // your can use 'iife','cjs' or 'umd'
    }
}
```

Typically, it is caled `rollup.config.js` and sits in the root directory of your project.

Behind the scenes, Rollup js usually `transpile` and `bundle` this file and its relative dependencies to 
CommonJs before requiring it.<br/><br/>

If you want to write your config as a `CommonJs` module using  `require` and `module.exports`, you should change the file extension to `.cjs`, which will prevent rollup to transpile the file.
<br/><br/>

You can also use other language for your configuration file like `typescript`.
install a corrosponding rollup plugin lik `@rollup/plugin-typescript` use the `--configPlugin` option

```
rollup --config rollup.config.ts --configPlugin typescript
```

**`Config Intellisense:`**
Since rollup ships with typescript typings, you can leverage IDE's Intellisense with `JSDoc` type hints.
```
// roleup.config.js
/**
* @type {import ('rollup').RollupOptions}
*/

const config={

}

export default config;
```

Alternatively you can use the `defineConfig` helper, which should provide the Intellisense without the need of `JSDoc` annotations.
```
//rollup.config.js
import {defineConfig} from 'rollup'

const config ={

}

export default defineConfig(config)
```

**`Rollup config file support below options:`**
```
// rollup.config.js

// can be an array (for multiple inputs)
export default {
  // core input options
  external,
  input, // conditionally required
  plugins,

  // advanced input options
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // danger zone
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // experimental
  experimentalCacheExpiry,
  perf,

  // required (can be an array, for multiple outputs)
  output: {
    // core output options
    dir,
    file,
    format, // required
    globals,
    name,
    plugins,

    // advanced output options
    assetFileNames,
    banner,
    chunkFileNames,
    compact,
    entryFileNames,
    extend,
    footer,
    hoistTransitiveImports,
    inlineDynamicImports,
    interop,
    intro,
    manualChunks,
    minifyInternalExports,
    outro,
    paths,
    preserveModules,
    preserveModulesRoot,
    sourcemap,
    sourcemapExcludeSources,
    sourcemapFile,
    sourcemapPathTransform,
    validate,

    // danger zone
    amd,
    esModule,
    exports,
    externalLiveBindings,
    freeze,
    indent,
    namespaceToStringTag,
    noConflict,
    preferConst,
    sanitizeFileName,
    strict,
    systemNullSetters
  },

  watch: {
    buildDelay,
    chokidar,
    clearScreen,
    skipWrite,
    exclude,
    include
  }
};
```