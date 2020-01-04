import colorsSafe from 'colors/safe'

const checkIfNameIsValid = ({ projectName }: { projectName: string }): boolean => {
    const trimedProjectName = projectName.trim()
    const errors = [];

    if (trimedProjectName.match(/^\./)) {
        errors.push('Project name cannot start with a period')
    }

    if (trimedProjectName.match(/^_/)) {
        errors.push('Project name cannot start with an underscore')
    }

    if (trimedProjectName.toLowerCase() !== trimedProjectName) {
        errors.push('Project name can no longer contain capital letters')
    }

    if (/[~'!()*]/.test(trimedProjectName.split('/').slice(-1)[0])) {
        errors.push('Project name can no longer contain special characters ("~\'!()*")')
    }

    if (errors.length > 0) {
        errors.forEach(error => console.log(colorsSafe.red(`⛔  ${error}`)))
        throw Error('Project name is not')
        return false
    }
    return true
}

export default checkIfNameIsValid