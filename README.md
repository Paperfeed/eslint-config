An opinionated linting configuration.

By default, it will warn for everything that is not sorted alphabetically.
Most importantly these are mostly fixable linting rules.

It is *highly* recommended to set up your editor to automatically lint fix on save.

Computers are good at sorting things, so let them do it. It takes cognitive load off of you.

## Usage

Simply import the configuration in your `eslint.config.mjs` file:

```javascript
import paperfeed from '@paperfeed/eslint-config'

export default [
    ...paperfeed.configs.base,
    ...paperfeed.configs.react,
    ...paperfeed.configs.next
]
```

## Available configurations

- `base`: Base configuration for typescript projects.
This includes the `perfectionist` plugin which sorts most everything, converted to warn instead of error (so it doesn't break your build and you don't get constant red wiggles everywhere).
- `react`: React configuration.
- `next`: Next.js configuration.
