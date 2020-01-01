import { green } from 'colors/safe';
import program from 'commander';

program
    .command('new <projectName>')
    .description('Create a new project.')
    .action((projectName: string) => {
        console.log(green('Creating a new Project...'))
    })

program.parse(process.argv);

// Shows help if no arguments are provided
if (process.argv.length === 2) {
    program.outputHelp();
}