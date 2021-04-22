#!/usr/bin/env node
/* szobonyatomi/npxcard
 *
 * /index.js - Main Entry point
 *
 * coded by tomi@NortDock!
 * refactored at 22/04/2021
 */

const chalk = require('chalk');
const boxen = require('boxen');

// Text + chalk definitions

const data = {
  name: chalk.white('             Tamas Szobonya'),
  handle: chalk.white.bold('Tomi'),
  work: chalk.white('rookie coder at BeCode.org'),

  npm: chalk.gray('https://npmjs.com/') + chalk.red('~szobonyatomi'),
  github: chalk.gray('https://github.com/') + chalk.green('szobonyatomi'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('tomi-szobonya'),
  //web: chalk.cyan('#'),
  npx: chalk.red('npx') + ' ' + chalk.white('Tomi'),
  labelWork: chalk.white.bold('       Work:'),
  //labelTwitter: chalk.white.bold('    Twitter:'),
  labelNpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  //labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

const NEWLINE = '\n';
const EMPTYLINE = '';

console.log(
  chalk.green(
    boxen(
      [
        `${data.name} / ${data.handle}`,
        EMPTYLINE,
        `${data.labelWork} ${data.work}`,
        EMPTYLINE,
        `${data.labelTwitter} ${data.twitter}`,
        `${data.labelNpm} ${data.npm}`,
        `${data.labelGitHub} ${data.github}`,
        `${data.labelLinkedIn} ${data.linkedin}`,
        `${data.labelWeb} ${data.web}`,
        EMPTYLINE,
        `${data.labelCard} ${data.npx}`,
      ].join(NEWLINE),
      {
        padding: 2,
        margin: 1,
        borderColor: '#2143ad',
        borderStyle: 'double',
        dimBorder: true,
        float: 'center',
        align: 'right',
      }
    )
  )
);
