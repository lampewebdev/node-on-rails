import colorsSafe from 'colors/safe'
import { checkDevDependencies, generateNewProject, installNPMPackages } from './utils';

const newProject = ({ projectName }: { projectName: string }): boolean => {
    console.log(`🧐  Checking if needed dependencies are installed...`)
    checkDevDependencies();
    console.log(`🎉  Creating a new ${colorsSafe.green(projectName)} Project...`)
    generateNewProject({ projectName })
    console.log(`📦  Installing npm packages...`)
    installNPMPackages();
    console.log(`✅  ${colorsSafe.green('Your project is good to go')} \n ------------------- \n $ cd ${projectName} \n $ yarn run dev:watch
                `)
    return true;
}

export { newProject }

