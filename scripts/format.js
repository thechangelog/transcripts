const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises

const REPLACES = [
    [/([^/])\bjavascript/gi, '$1JavaScript'], // stylise javascript to JavaScript
    [/npm/gi, 'npm'], // stylize npm as all lowercase
    [/\bML[\s|-]ops/gi, 'MLOps'],
    [/\bai[\s|-]ops/gi, 'AIOps'],
    [/\bdev ops/gi, 'DevOps'],
    [/\bclick[\s|-]ops/gi, 'ClickOps'],
    [/\bgofmt/gi, '`go fmt`'], // it's always `go fmt`
    [/\b(open)(sourc[e|ing])/gi, '$1 $2'],
    [/\b(open)-(sourc[e|ing])/gi, '$1 $2'],
    [/\b(close)(sourc[e|ing])/gi, '$1 $2'],
    [/\b(closed?)-(sourc[e|ing])/gi, '$1 $2'],
    [/\bopen source\.com/gi, 'opensource.com'],
    [/\b(e)-(mail)/gi, '$1$2'], // e-mail and E-mail => email and Email
    [/\\?\[(00:)?(\d{2}:\d{2})(\.\d{2})?\\?\]/g, '\\[$2\\]'], // Remove leading 00: and fractions in timestamps
    [/\\`(.*?)\\`/g, '`$1`'], // Remove escaping backslashes before backticks
    [/\bgithub/gi,'GitHub'], // stylise github to GitHub (This breaks github.com, but the next line fixes it again)
    [/\bgithub(\.\w)/gi,'github$1'], // stylise GitHub.com to github.com
    [/\bgitlab/gi,'GitLab'], // stylise gitlab to GitLab (This breaks gitlab.com, but the next line fixes it again)
    [/\bgitlab(\.\w)/gi,'gitlab$1'], // stylise GitLab.com to gitlab.com
    [/\sn\b/gi, ' N'], // when "n" is used as a placeholder, make it capital
    [/\bstandard in\b/gi, 'STDIN'],
    [/\bstdin\b/gi, 'STDIN'],
    [/\bstandard out\b/gi, 'STDOUT'],
    [/\bstdout\b/gi, 'STDOUT'],
    [/\bstandard error\b/gi, 'STDERR'],
    [/\bstderr\b/gi, 'STDERR'],
    [/\bWeb Assembly\b/gi, 'WebAssembly']
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
