const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');
const modifyVars = require('./src/config/styles/modifyVars');

module.exports = override(
  addBabelPlugin(["styled-components", {displayName: true}]),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,

  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  })

);
