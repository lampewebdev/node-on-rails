import { green } from 'colors/safe';

export default ({ projectName}: {projectName: string }) => {
    console.log(green(`Creating a new ${projectName} Project...`))
}