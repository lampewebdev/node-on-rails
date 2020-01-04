import { execSync } from "child_process";
import colorsSafe from 'colors/safe'

export default (): boolean => {
    try {
        const yarnVersion = execSync('yarn --version').toString().trim();
        console.log(colorsSafe.green(`✅  yarn installd in version: ${yarnVersion}.`))
        return true
    } catch (error) {
        console.log(colorsSafe.red(`⛔  Please install yarn --> https://yarnpkg.com`))
        throw Error('Yarn not installed');
    }
}