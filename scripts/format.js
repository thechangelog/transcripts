const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises

const REPLACES = [
    [/([^/])\bjavascript/gi, '$1JavaScript'], // stylise javascript to JavaScript
    [/\bML ops/gi, 'MLOps'],
    [/\bdev ops/gi, 'DevOps'],
    [/\bclick[ -]ops/g, 'ClickOps'],
    [/\bgofmt/gi, 'go fmt'], // it's always go fmt
    [/\b(open)(sourc[e|ing])/gi, '$1 $2'],
    [/\b(open)-(sourc[e|ing])/gi, '$1 $2'],
    [/\b(close)(sourc[e|ing])/gi, '$1 $2'],
    [/\b(closed?)-(sourc[e|ing])/gi, '$1 $2'],
    [/\bopen source\.com/gi, 'opensource.com'],
    [/\b(e)-(mail)/gi, '$1$2'], // e-mail and E-mail => email and Email
    [/\\?\[(00:)?(\d{2}:\d{2})(\.\d{2})?\\?\]/g, '\\[$2\\]'], // Remove leading 00: and fractions in timestamps
    [/\\`(.*?)\\`/g, '`$1`'], // Remove escaping backslashes before backticks
]

// Perform multiple rounds of replaces on a string
function applyReplaces(text) {
    return REPLACES.reduce((prev, [a, b]) => prev.replace(a, b), text)
}

// Returns an array of the filenames of all the episodes
async function getTranscripts() {
    const { stdout } = await exec('find **/*.md')
    return stdout
        .split('\n') // make an array
        .filter(x => x.endsWith('.md')) // remove blanks
}

// Read a textfile to a string, pass the string through processor, and write the results out to a file
async function processFile(filename, processor, newname = '') {
    const inText = await fs.readFile(filename).then(buffer => buffer.toString())
    const outText = processor(inText)
    if (outText != inText) {
        await fs.writeFile(newname || filename, outText)
    }
}

async function main() {
    const transcripts = await getTranscripts()
    transcripts.forEach(filename => processFile(filename, applyReplaces))
}

if (require.main === module) {
    main();
}

module.exports = {
    getTranscripts, processFile, applyReplaces
}
