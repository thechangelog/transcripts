const fs = require('fs').promises
const os = require('os')
const path = require('path')

const {applyReplaces, getTranscripts, processFile}= require('./format')


test('applyReplaces works as expected', () => {
    expect(applyReplaces('I love javascript')).toBe('I love JavaScript')
    expect(applyReplaces('r/javascript')).toBe('r/javascript')
    
    expect(applyReplaces('\[00:04:06.27\]')).toBe('\[04:06\]')
    expect(applyReplaces('\[00:10:17.78\]')).toBe('\[10:17\]')
    expect(applyReplaces('\[03:43.78\]')).toBe('\[03:43\]')
    
    expect(applyReplaces("\\`console.log($TOKEN)\\`")).toBe('`console.log($TOKEN)`')
    expect(applyReplaces("The difference between \\`foo\\` and \\`bar\\`")).toBe('The difference between `foo` and `bar`')

    expect(applyReplaces("ML ops is ML ops, but OCAML ops is not")).toBe('MLOps is MLOps, but OCAML ops is not')
})


test('getTranscripts works as expected', async () => {
    const transcripts = await getTranscripts()
    // TODO: What are good ways to test this function?
})


test('processFile works as expected', async () => {
    const location = await fs.mkdtemp(path.join(os.tmpdir(), 'format-'))
    const filename = path.join(location, 'temp.txt')
    const text = "The Quick Brown Fox Jumps Over the Lazy dog.\nI wander lonely as a cloud.\n"
    await fs.writeFile(filename, text)    
    await processFile(filename, x => x.toLowerCase())
    const outText = await fs.readFile(filename).then(x => x.toString())
    expect(outText).toBe(text.toLowerCase())
    await fs.rm(location, {recursive: true})
})