import { existsSync } from 'fs';
import colorsSafe from 'colors/safe'

const checkIfDirExists = ({ projectPath, projectName }: { projectPath: string; projectName: string }): boolean => {
    try {
        if (existsSync(`${projectPath}/${projectName}`)) {
            console.log(`🛑  📁 Project Folder already exsists ${colorsSafe.red(`${projectPath}/${projectName}`)}`)
            throw Error("project folder already exists")
        } else {
            return false
        }
    } catch (error) {
        throw Error(error)
    }
}

export default checkIfDirExists