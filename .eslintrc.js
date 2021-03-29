module.exports = {
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  rules: {},
  overrides: [
    {
      files: ['src/*/*', 'tests/*'],
      rules: {
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-statements': 'off',
      },
    },
  ],
  settings: {
    node: {
      extensions: ['.ts', '.json'],
    },
  },
};
