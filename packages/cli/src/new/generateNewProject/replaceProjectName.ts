import { readFileSync, writeFileSync } from 'fs'

export default ({ projectPath, projectName }: { projectPath: string; projectName: string }): boolean => {
    try {
        const packageJSON = `${projectPath}/${projectName}/package.json`
        const file = readFileSync(packageJSON, 'utf8');
        const result = file.replace(/<REPLACE_PROJECT_NAME>/g, projectName);
        writeFileSync(packageJSON, result, 'utf8');
        return true
    } catch (error) {
        console.log(`🚫  Could not rename the package.json name`)
        throw error
    }
}