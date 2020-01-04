import { execSync } from "child_process";
import colorsSafe from 'colors/safe'

export default (): boolean => {
    try {
        const nodeVersion = execSync('node --version').toString().trim();
        console.log(`✅  NodeJS installd in version: ${colorsSafe.green(nodeVersion)}.`)
        if (parseInt(nodeVersion.substring(1, 3)) < 13) {
            console.log(colorsSafe.red(`⛔  Node Version to old. Please install NodeJS +13.0.0--> https://nodejs.org`))
            throw Error('Node Version too old')
        }
        return true
    } catch (error) {
        console.log(colorsSafe.red(`⛔  Please install NodeJS --> https://nodejs.org`))
        throw Error('Nodejs not installed');
    }
}