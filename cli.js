#!/usr/bin/env node
const prettierEslintCheck = require('.');

const args = process.argv.slice(2);
prettierEslintCheck(args)
  .then((code) => {
    process.exit(code);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
