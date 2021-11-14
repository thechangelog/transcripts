const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const child_process = require('child_process')
const exec = util.promisify(child_process.exec);

// minimal implementation of glob - avoiding adding 'glob' dependency
async function glob(pattern = "*") {
    const { stdout } = await exec('find ' + pattern);
    return stdout
        .split('\n') // make an array
        .filter(x => x); // remove blanks
}

// Returns the contents of a file as a string
async function readFileString(filename) {
    const buffer = await fs.readFile(filename);
    return buffer.toString();
}

async function makePath(name) {
    const dirname = path.dirname(name)
    return fs.mkdir(dirname, {recursive: true})
}

async function jsonToFile(json, filename) {
    const str = JSON.stringify(json, null, 2)
    await fs.writeFile(filename, str)
}

module.exports = {
    glob,
    readFileString,
    makePath,
    jsonToFile,
}