import isYarnInstalled from './isYarnInstalld'
import isNodeInstalled from './isNodeInstalled'

const checkDevDependencies = (): boolean => {
    console.log(`🧐  Checking if needed dependencies are installed...`)
    isNodeInstalled();
    isYarnInstalled();
    return true
}

export default checkDevDependencies;