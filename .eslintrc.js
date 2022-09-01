module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['import', 'jest', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
};
