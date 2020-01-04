import { execSync } from "child_process";

const InstallNPMPackages = ({ projectName }: { projectName: string }): boolean => {
    const projectPath = `/tmp`;
    console.log(`📦  Installing npm packages...`)
    execSync(`yarn`, {
        cwd: `${projectPath}/${projectName}`
    })
    return true;
}

export default InstallNPMPackages