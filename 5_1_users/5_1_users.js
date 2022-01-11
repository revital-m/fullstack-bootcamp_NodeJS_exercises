import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addUser, updateUser, readUser, deleteUser } from './userUtils.js';


//* commands: create, update, read, delete, .
// Create the create command.
yargs(hideBin(process.argv)).command({
    command: 'create',
    describe: 'Create a new user',
    builder: {
        name: {
            describe: "User name",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: "User email",
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        addUser(argv.name, argv.email);
    },
}).parse();

// Create the update command.
yargs(hideBin(process.argv)).command({
    command: 'update',
    describe: 'update a user',
    builder: {
        id: {
            describe: "User id",
            demandOption: true,
            type: 'string',
        },
        name: {
            describe: "User name",
            type: 'string',
        },
        email: {
            describe: "User email",
            type: 'string',
        },
    },
    handler: function (argv) {
        updateUser(argv.id, argv.name, argv.email);
    },
}).parse();

// Create the read command.
yargs(hideBin(process.argv)).command({
    command: 'read',
    describe: 'read a user',
    builder: {
        id: {
            describe: "User id",
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        readUser(argv.id);
    },
}).parse();

// Create the delete command.
yargs(hideBin(process.argv)).command({
    command: 'delete',
    describe: 'delete a user',
    builder: {
        id: {
            describe: "User id",
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        deleteUser(argv.id);
    },
}).parse();