import colorsSafe from 'colors/safe'
import { checkDevDependencies, generateNewProject, installNPMPackages } from './utils';

const newProject = ({ projectName }: { projectName: string }): boolean => {
    try {
        checkDevDependencies();
        generateNewProject({ projectName })
        installNPMPackages();
        console.log(`✅  ${colorsSafe.green('Your project is good to go')} \n ------------------- \n $ cd ${projectName} \n $ yarn run dev:watch`)
        return true;
    } catch (error) {
        process.exit();
    }

}

export { newProject }

