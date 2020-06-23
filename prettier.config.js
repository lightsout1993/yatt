module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: false,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
  ],
};
