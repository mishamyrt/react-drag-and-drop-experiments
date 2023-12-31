module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/triple-slash-reference': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['react$'], ['@ozen'], ['^@?\\w'], ['^'], ['^\\.'], ['\\.scss']],
      },
    ],
  },
}
