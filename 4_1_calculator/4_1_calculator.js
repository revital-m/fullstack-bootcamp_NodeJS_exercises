import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//* commands: add, sub, mult, pow.
// Create the add command.
yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add tow numbers',
    builder: {
        firstNum: {
            describe: "First number",
            demandOption: true,
            type: 'number',
        },
        secondNum: {
            describe: "Second number",
            demandOption: true,
            type: 'number',
        },
    },
    handler: function (argv) {
        const sum = argv.firstNum + argv.secondNum;
        console.log(chalk.green(`add = ${sum}`));
    },
}).parse();

// Create the sub command.
yargs(hideBin(process.argv)).command({
    command: 'sub',
    describe: 'substract tow numbers',
    builder: {
        firstNum: {
            describe: "First number",
            demandOption: true,
            type: 'number',
        },
        secondNum: {
            describe: "Second number",
            demandOption: true,
            type: 'number',
        },
    },
    handler: function (argv) {
        const sub = argv.firstNum - argv.secondNum;
        console.log(chalk.green(`sub = ${sub}`));
    },
}).parse();

// Create the mult command.
yargs(hideBin(process.argv)).command({
    command: 'mult',
    describe: 'multiply tow numbers',
    builder: {
        firstNum: {
            describe: "First number",
            demandOption: true,
            type: 'number',
        },
        secondNum: {
            describe: "Second number",
            demandOption: true,
            type: 'number',
        },
    },
    handler: function (argv) {
        const mult = argv.firstNum * argv.secondNum;
        console.log(chalk.green(`mult = ${mult}`));
    },
}).parse();

// Create the pow command.
yargs(hideBin(process.argv)).command({
    command: 'pow',
    describe: 'pow of the number',
    builder: {
        num: {
            describe: "Number to be powed",
            demandOption: true,
            type: 'number',
        },
    },
    handler: function (argv) {
        const pow = Math.pow(argv.num,2);
        console.log(chalk.green(`pow = ${pow}`));
    },
}).parse();
