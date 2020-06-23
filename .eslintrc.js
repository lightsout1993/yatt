const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const COMPLEXITY = 11;

const ruleImportExtensions = (...extensions) => [
  ERROR,
  'always',
  extensions.reduce(
    (acc, ext) => ({ ...acc, [ext]: 'never' }),
    {},
  )];

const commonPlugins = [
  'import',
  'promise',
  'unicorn',
  'jsx-a11y',
  'react-hooks',
];

const commonExtends = [
  'eslint:recommended',
  'prettier',
  'prettier/react',
  'plugin:promise/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:unicorn/recommended',
  'airbnb',
  'airbnb/hooks',
];

const commonRules = {
  // import
  'import/extensions': ruleImportExtensions('js', 'jsx'),

  // react
  'react/jsx-props-no-spreading': WARN,
  'react/destructuring-assignment': OFF,

  // react-hooks
  'react-hooks/rules-of-hooks': ERROR,
  'react-hooks/exhaustive-deps': WARN,

  // unicorn
  'unicorn/no-null': OFF,
  'unicorn/no-reduce': OFF,
  'unicorn/prevent-abbreviations': OFF,
  'unicorn/no-fn-reference-in-iterator': OFF,

  // airbnb-base
  complexity: [WARN, COMPLEXITY],
  'no-eq-null': ERROR,
  'no-magic-numbers': [WARN, {
    ignore: [0, -1, 1, 100],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
  }],
};

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  plugins: commonPlugins,
  extends: commonExtends,
  rules: commonRules,
  settings: {
    'import/resolver': {
      webpack: { config: 'configWebpack/webpack.config.js' },
    },
  },
  overrides: [
    {
      files: ['*rc.js', '*.config.js'],
      rules: {
        'global-require': OFF,
        'import/no-commonjs': OFF,
        'import/no-extraneous-dependencies': OFF,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        ...commonPlugins,
        '@typescript-eslint',
      ],
      extends: [
        ...commonExtends,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
      rules: {
        ...commonRules,

        // import
        'import/extensions': ruleImportExtensions('js', 'jsx', 'ts', 'tsx'),
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
