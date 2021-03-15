const path = require('path');
const fse = require('fs-extra');

const sourcePath = path.resolve(__dirname, '../src');
const targetPath = path.resolve(__dirname, '../dist');

fse.copySync(sourcePath,targetPath, {
  filter: (src) => {
    return !src.endsWith('.js');
  }
});