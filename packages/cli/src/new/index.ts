import colorsSafe from 'colors/safe'
import checkDevDependencies from './checkDevDependencies'
import generateNewProject from './generateNewProject'
import installNPMPackages from './installNPMPackages'

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

