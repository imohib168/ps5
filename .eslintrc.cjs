module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',

    /* ref: https://github.com/jsx-eslint/eslint-plugin-react#configuration */
    'plugin:react/jsx-runtime',

    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  /* ref: https://github.com/jsx-eslint/eslint-plugin-react#configuration */
  settings: { react: { version: 'detect' } },

  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'check-file', 'eslint-plugin-react'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'no-console': ['warn'],
    'no-multi-spaces': ['error'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/boolean-prop-naming': ['error'],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-unused-prop-types': ['error'],
    'react/self-closing-comp': ['warn', { component: true, html: true }],

    /* File & Folder naming convention rules */
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{jsx,tsx}': '(App|[a-z0-9-]+)', // App should start with a capital letter, rest in kebab-case
        '**/*.{js,ts}': '[a-z0-9-]+', // accept all files that are all lowercase kebab-case or single word
      },
      { ignoreMiddleExtensions: true },
    ],
    'check-file/folder-naming-convention': [
      'error',
      { 'src/**': '[a-z0-9-]+' }, // accept all folders that are all lowercase kebab-case or single word
    ],
  },
};
