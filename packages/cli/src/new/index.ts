import colorsSafe from 'colors/safe';

export default ({ projectName}: {projectName: string }) => {
    console.log(`Creating a new ${colorsSafe.green(projectName)} Project...`)
}