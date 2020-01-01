import program from 'commander';

import newProject from './new';

program
    .command('new <projectName>')
    .description('Create a new project.')
    .action((projectName: string) => {
        newProject({projectName})
    })

program.parse(process.argv);

// Shows help if no arguments are provided
if (process.argv.length === 2) {
    program.outputHelp();
}