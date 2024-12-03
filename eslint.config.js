import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      "func-names": "off",
    "import/extensions": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "max-len": ["error", { "code": 250 }],
    "react/destructuring-assignment": ["off"],
    "import/prefer-default-export": "off",
    "react/no-did-update-set-state": "off",
    "react/button-has-type": "off",
    "no-unused-vars": "off",
    "react/jsx-props-no-spreading": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-void": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "react/require-default-props": "off",
    "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
