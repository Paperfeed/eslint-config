A common eslint config with no hassle

The default config `@paperfeed` (located in index.js) is finetuned for a Typescript React project and adds a lot of fixable rules. Sorting is automatic and _beautiful_.

### Recommended usage:
In the project you want to use it in run `npm i -D @rushstack/eslint-patch` 

and edit your eslint config to contain the following:

```
// .eslintrc.js:
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@paperfeed'],
}
```

Highly recommend using an IDE that allows you to run prettier and eslint on save.

