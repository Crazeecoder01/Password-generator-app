module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended' // Add Prettier recommended config
  ],
  plugins: ['prettier'], // Add Prettier plugin
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'no-extra-semi': 'off', // Disable rules that conflict with Prettier
    '@typescript-eslint/no-extra-semi': 'off',
    semi: ['error', 'never']
  }
};
