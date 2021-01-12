# Minimal reproducible example: If one among multiple ESM tests has a syntax error, then Mocha doesn’t report which one

Installation:

```
cd mocha-test-repo/
npm install
```

Execute either of the following two commands:

```
npm t test*.mjs
npm t 'test*.mjs'
```

Then you only get the following error message:

```
SyntaxError: Unexpected token '=>'
    at Loader.moduleStrategy (internal/modules/esm/translators.js:117:18)
    at async link (internal/modules/esm/module_job.js:42:21)
```

I’d like Mocha to tell me that `test2.mjs` has a syntax error.