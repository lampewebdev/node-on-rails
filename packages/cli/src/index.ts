import program from 'commander';
import colors from 'colors';

import { newProject } from './new';

colors.enable();
program
    .command('new <projectName>')
    .description('Create a new project.')
    .action((projectName: string) => {
        newProject({ projectName })
    })

program.parse(process.argv);

// Shows help if no arguments are provided
if (process.argv.length === 2) {
    program.outputHelp()
}