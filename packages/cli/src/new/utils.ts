import colorsSafe from 'colors/safe'
import checkDevDependencies from './checkDevDependencies'

const generateNewProject = ({ projectName }: { projectName: string }): boolean => {
    console.log(`🎉  Creating a new ${colorsSafe.green(projectName)} Project...`)
    return true;
}
const installNPMPackages = (): boolean => {
    console.log(`📦  Installing npm packages...`)
    return true;
}

export { checkDevDependencies, generateNewProject, installNPMPackages }