module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        config: 'tailwind.config.cjs',
      },
    ],
  },
};
