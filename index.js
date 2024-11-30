import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import { fixupPluginRules } from '@eslint/compat'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

function convertErrorToWarn(rules) {
  return Object.keys(rules).reduce((acc, key) => {
    const [_type, options] = rules[key]
    acc[key] = ['warn', options]
    return acc
  }, {})
}

const base = tseslint.config(
  { ignores: ['node_modules'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      ...convertErrorToWarn(perfectionist.configs['recommended-natural'].rules),
      "perfectionist/sort-imports": ["warn", {
        internalPattern: ['^@/.*', '^~/.*'],
      }],
      'perfectionist/sort-jsx-props': ['warn',  {
        groups: [
          'refs',
          'className',
          'unknown',
          'shorthand',
           'callback',
          'multiline',
          'render'
        ],
        customGroups: {
          callback: '^on.+',
          refs: '^ref',
          render: '^render',
          className: '^className'
        }
      }],
      'perfectionist/sort-union-types': [
        "warn",
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        }
      ]
    },
    plugins: {
      perfectionist,
    }
  },
  {
    plugins: {
      'unused-imports': fixupPluginRules(unusedImportsPlugin),
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  // Customized rules:
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-empty-pattern': 'off',
      'no-console': 'warn',
    }
  },
  prettier,
)

const react = tseslint.config(
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
        },
      ],
      'react/prop-types': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    ignores: ['*.test.tsx'],
  },
)

const next = tseslint.config({
  rules: {
    ...nextPlugin.configs['core-web-vitals'].rules
  },
  plugins: {
    '@next/next': nextPlugin,
  },
})

export default {
  configs: {
    base,
    react,
    next,
  },
}

// parser: '@typescript-eslint/parser',
// plugins: [
//   'simple-import-sort',
//   'sort-keys-fix',
//   'typescript-sort-keys',
//   'sort-destructure-keys',
//   'jsx-a11y'
// ],
// extends: [
//   'plugin:@typescript-eslint/recommended',
//   'plugin:import/typescript',
//   'plugin:react/recommended',
//   'plugin:react/jsx-runtime',
//   'plugin:react-hooks/recommended',
//   'prettier',
// ],
// settings: {
//   react: {
//     version: 'detect',
//   },
// },
// rules: {
//   'no-console': 'warn',
//   // Typescript es-lint handles this
//   'no-unused-vars': 'off',
//
//   /**
//    * React
//    */
//   'react/prop-types': 'off',
//   'react/jsx-curly-brace-presence': [
//     'warn',
//     {
//       props: 'never',
//     },
//   ],
//
//   /**
//    * Typescript
//    */
//   '@typescript-eslint/explicit-module-boundary-types': 'off',
//   '@typescript-eslint/explicit-function-return-type': 'off',
//   '@typescript-eslint/explicit-member-accessibility': 'off',
//   '@typescript-eslint/no-non-null-assertion': 'off',
//   '@typescript-eslint/no-unused-vars': 'error',
//   '@typescript-eslint/no-var-requires': 'off',
//   '@typescript-eslint/ban-types': 'warn',
//
//   /**
//    * Sorting
//    */
//   'simple-import-sort/imports': 'warn',
//   'simple-import-sort/exports': 'warn',
//   'sort-keys-fix/sort-keys-fix': 'warn',
//   'typescript-sort-keys/interface': 'warn',
//   'typescript-sort-keys/string-enum': 'warn',
//   'react/jsx-sort-props': [
//     'warn',
//     {
//       ignoreCase: true,
//       reservedFirst: true,
//       shorthandLast: true,
//     },
//   ],
//   'sort-destructure-keys/sort-destructure-keys': [
//     'warn',
//     { caseSensitive: false },
//   ],
//   '@typescript-eslint/member-ordering': 'warn',
//
//   /**
//    * jsx-a11y Acessibility rules - Recommended rules but warn instead of error
//    */
//   'jsx-a11y/alt-text': [
//     'warn',
//     {
//       elements: ['img'],
//       img: ['Image'],
//     },
//   ],
//   'jsx-a11y/aria-props': 'warn',
//   'jsx-a11y/aria-proptypes': 'warn',
//   'jsx-a11y/aria-unsupported-elements': 'warn',
//   'jsx-a11y/role-has-required-aria-props': 'warn',
//   'jsx-a11y/role-supports-aria-props': 'warn',
//
//   /**
//    * Misc rules
//    */
//   'eqeqeq': ["error", "always"]
// },
// );
