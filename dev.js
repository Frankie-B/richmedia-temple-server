#! /usr/bin/env node

const dev = require('./src/dev');
const jsonParseDeep = require('./src/util/jsonParseDeep');
const program = require('commander');
const chalk = require('chalk');
const packageJson = require('./package.json');

program
  .version(packageJson.version)
  .option('-g, --glob <data>', 'Globbing pattern like "-p ./src/**/.richmediarc"')
  .option('-ss, --stats', 'Show stats when building')
  .option('-c, --choices <data>', 'predetermined settings')
  .parse(process.argv);

dev({
  glob: program.glob,
  stats: program.stats,
  choices: program.choices ? JSON.parse(program.choices) : null,
}).then(r => console.log(`${chalk.green('✔')} done`));
