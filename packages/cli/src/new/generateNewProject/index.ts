import colorsSafe from 'colors/safe'
import checkIfNameIsValid from './checkIfNameIsValid'
import generateProjectFiles from './generateProjectFiles'
import checkIfDirExists from './checkIfDirExists'
import { mkdirSync } from 'fs'
const generateNewProject = ({ projectName }: { projectName: string }): boolean => {
    try {
        console.log(`🎉  Creating a new ${colorsSafe.green(projectName)} Project...`)
        checkIfNameIsValid({ projectName })
        const projectPath = process.cwd();
        if (!checkIfDirExists({ projectPath, projectName })) {
            mkdirSync(`${projectPath}/${projectName}`);
            console.log(`📁  Created project folder at: ${projectPath}/${projectName}`)
        }
        generateProjectFiles({ projectName })
        return true;
    } catch {
        console.log(`⛔  Could not create the project ${colorsSafe.red(projectName)}`)
        throw Error("Could not create project")
    }
}

export default generateNewProject;