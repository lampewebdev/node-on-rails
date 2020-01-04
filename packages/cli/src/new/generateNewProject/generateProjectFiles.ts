import { createReadStream, createWriteStream, mkdirSync, readdirSync, lstatSync, readlinkSync, symlinkSync, copyFileSync } from "fs"
import { join } from 'path'

const mkdir = function (dir: string): boolean {
    // making directory without exception if exists
    try {
        mkdirSync(dir, '0755');
        return true;
    } catch (e) {
        console.log(e)
        if (e.code != "EEXIST") {
            throw e;
        }
        return false;
    }
};

const copy = function (src: string, dest: string): boolean {
    copyFileSync(src, dest)
    return true
};

const copyDir = function (src: string, dest: string): boolean {
    try {
        mkdir(dest);
        const files = readdirSync(src);
        for (let i = 0; i < files.length; i++) {
            const current = lstatSync(join(src, files[i]));
            if (current.isDirectory()) {
                console.log(`📁  creating dir: ${join(dest, files[i])}`)
                copyDir(join(src, files[i]), join(dest, files[i]));
            } else if (current.isSymbolicLink()) {
                const symlink = readlinkSync(join(src, files[i]));
                symlinkSync(symlink, join(dest, files[i]));
            } else {
                console.log(`📜  creating file: ${join(dest, files[i])}`)
                copy(join(src, files[i]), join(dest, files[i]));
            }
        }
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};

const generateProjectFiles = ({ projectPath, projectName }: { projectPath: string; projectName: string }): boolean => {
    const sourceDir = join(__dirname, '../templates/Basic')
    const destionationDir = join(projectPath, projectName)
    // const destionationDir = join('/tmp/', projectName);
    copyDir(sourceDir, destionationDir)
    return true;
}

export default generateProjectFiles

