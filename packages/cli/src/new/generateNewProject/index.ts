import colorsSafe from 'colors/safe'

const generateNewProject = ({ projectName }: { projectName: string }): boolean => {
    console.log(`🎉  Creating a new ${colorsSafe.green(projectName)} Project...`)
    return true;
}

export default generateNewProject;