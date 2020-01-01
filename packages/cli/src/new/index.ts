import colorsSafe from 'colors/safe';

const newProject = ({ projectName }: { projectName: string }): boolean => {
    console.log(`Creating a new ${colorsSafe.green(projectName)} Project...`)
    return true;
}

export { newProject }

