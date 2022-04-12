An eslint config with no hassle.

The default config `@paperfeed` (located in index.js) is finetuned for a Typescript React project and adds a lot of fixable rules. Sorting is automatic and _beautiful_.

It makes use of `@rushstack/eslint-patch` so you won't have to add any dependencies to your project. Just install eslint and this config and you're good to go!

### Recommended usage:
Just add `@paperfeed` to your extends in your eslint config.
```
{
    extends: ['@paperfeed']
}
```

I also recommend adding prettier `npm install -D prettier` with the following config in your package.json 
```
  "prettier": {
    "trailingComma": "es5",
    "semi": false,
    "singleQuote": true
  }
```
and set both to run on save in your IDE.



# 

_From version 1.0.1 onwards the following is no longer required:_

In the project you want to use it in run `npm i -D @rushstack/eslint-patch` 

and edit your eslint config to contain the following:

```
// .eslintrc.js:
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@paperfeed'],
}
```
