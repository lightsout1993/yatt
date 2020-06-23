const path = require('path');
const { compilerOptions: { paths } } = require('../tsconfig.json');

const root = path.resolve(__dirname, '../');

module.exports = Object.keys(paths)
  .reduce((acc, pathTS) => {
    const alias = pathTS.replace('/*', '');

    return {
      ...acc,
      [alias]: path.resolve(root, `${alias}/`),
    };
  }, {});
