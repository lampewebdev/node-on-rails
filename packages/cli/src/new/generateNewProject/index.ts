import colorsSafe from 'colors/safe'
import checkIfNameIsValid from './checkIfNameIsValid';

const generateNewProject = ({ projectName }: { projectName: string }): boolean => {
    try {
        console.log(`🎉  Creating a new ${colorsSafe.green(projectName)} Project...`)
        checkIfNameIsValid({ projectName })
        return true;
    } catch {
        console.log(`🛑  Could not create the project ${colorsSafe.red(projectName)}`)
        throw Error("Could not create project")
    }
}

export default generateNewProject;