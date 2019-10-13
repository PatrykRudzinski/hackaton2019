const fs = require('fs');
const readline = require('readline');
const path = require('path');
const recursiveFileList = require('./utils/recursiveFileList');
const filterFiles = require('./utils/filterFiles');

const updateIndex = process.argv.includes('-u');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getName = msg => {
  return new Promise(resolve => {
    rl.question(msg, ans => {
      resolve(ans.trim());
    });
  });
};

const getComponentContent = name => {
  const imports = `import React from 'react';
  `;
  const body = `const ${name} = () => {
  return (
    <>
      ${name}
    </>
)};\n`;
  const exports = `export default ${name};\n`;
  return [ imports, body, exports ].join('\n');
};

const getIndexContent = name =>  `export { default } from './${name}'`;

const updateGeneralIndex = () => {
  const files = filterFiles(
    recursiveFileList('./'),
    {
      shouldContain: false,
      values: 'index.js',
    }
  ).map(f => path.parse(f).name);
  const fileName = 'index.js';

  fs.unlink(fileName, () => {

      fs.writeFile(fileName, '', () => {
        files.forEach(f => {
          fs.appendFileSync(fileName, `import ${f} from './${f}';\n`);
        });
        fs.appendFileSync(fileName, '\nexport {\n');
        files.forEach(f => {
          fs.appendFileSync(fileName, `\t${f},\n`);
        });
        fs.appendFileSync(fileName, '};\n')
      })
  })
};

const createComponent = async () => {
  const name = await getName('name: ');
  if (name) {
    rl.close();
    fs.mkdirSync(name);
    fs.writeFileSync(`${name}/${name}.jsx`, getComponentContent(name));
    fs.writeFileSync(`${name}/index.js`, getIndexContent(name));
    return name;
  }
};

createComponent().then( () => {
  if (!updateIndex) {
    console.log('To update index run it with -u flag');
  } else {
    updateGeneralIndex();
  }
});
