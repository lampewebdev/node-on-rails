import { readdirSync, lstatSync, copyFileSync, mkdirSync } from "fs"
import { join } from 'path'

const copyDir = function (src: string, dest: string): boolean {
    try {
        mkdirSync(dest);
        const files = readdirSync(src)
        files.forEach(file => {
            const currentSrc = join(src, file)
            const currentSrcState = lstatSync(currentSrc)
            const currentDest = join(dest, file)
            if (currentSrcState.isDirectory()) {
                console.log(`📁  creating dir: ${currentDest}`)
                copyDir(currentSrc, currentDest);
            } else {
                console.log(`📜  creating file: ${currentDest}`)
                copyFileSync(currentSrc, currentDest)
            }
        })
        return true
    } catch (error) {
        console.log(`🛑  ${error}`)
        throw error
    }
};

const generateProjectFiles = ({ projectPath, projectName }: { projectPath: string; projectName: string }): boolean => {
    try {
        const sourceDir = join(__dirname, '../templates/Basic')
        const destionationDir = join(projectPath, projectName)
        copyDir(sourceDir, destionationDir)
        return true;
    } catch (error) {
        console.log(`🛑  ${error}`)
        throw error
    }
}

export default generateProjectFiles

