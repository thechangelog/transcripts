const fs = require('fs').promises
const os = require('os')
const path = require('path')

const {applyReplaces, getTranscripts, processFile}= require('./format')


test('applyReplaces works as expected', () => {
    expect(applyReplaces('I love javascript')).toBe('I love JavaScript')
    expect(applyReplaces('r/javascript')).toBe('r/javascript')
    
    expect(applyReplaces('\[00:04:06.27\]')).toBe('\\[04:06\\]')
    expect(applyReplaces('\[00:10:17.78\]')).toBe('\\[10:17\\]')
    expect(applyReplaces('\[03:43.78\]')).toBe('\\[03:43\\]')
    expect(applyReplaces('\\[00:01:46\\]')).toBe('\\[01:46\\]')
    
    
    expect(applyReplaces('\\\[00:04:06.27\\\]')).toBe('\\[04:06\\]')
    expect(applyReplaces('\\\[00:10:17.78\]')).toBe('\\[10:17\\]')
    expect(applyReplaces('\[03:43.78\\\]')).toBe('\\[03:43\\]')
    
    expect(applyReplaces("\\`console.log($TOKEN)\\`")).toBe('`console.log($TOKEN)`')
    expect(applyReplaces("The difference between \\`foo\\` and \\`bar\\`")).toBe('The difference between `foo` and `bar`')

    expect(applyReplaces("ML ops is ML ops, but OCAML ops is not")).toBe('MLOps is MLOps, but OCAML ops is not')

    expect(applyReplaces("So then you type gofmt and go from there.")).toBe('So then you type go fmt and go from there.')
    expect(applyReplaces("I love gofmt.")).toBe('I love go fmt.')

    expect(applyReplaces("Opensource is the best")).toBe('Open source is the best')
    expect(applyReplaces("It's an open-source thing")).toBe("It's an open source thing")
    expect(applyReplaces("We open-sourced it")).toBe("We open sourced it")
    expect(applyReplaces("They are open-sourcing it soon")).toBe("They are open sourcing it soon")
    expect(applyReplaces("What's wrong with close-sourced stuff")).toBe("What's wrong with close sourced stuff")
    expect(applyReplaces("It's a closed-source thing")).toBe("It's a closed source thing")

    
})

test("formatting for GitHub and GitLab works", () => {
    expect(applyReplaces("The code is on github.")).toBe("The code is on GitHub.")
    expect(applyReplaces("at github.com/thechangelog/transcripts")).toBe("at github.com/thechangelog/transcripts")
    expect(applyReplaces("The code is on GITHUB")).toBe("The code is on GitHub")
    expect(applyReplaces("at https://GitHub.com/thechangelog/transcripts")).toBe("at https://github.com/thechangelog/transcripts")
    
    expect(applyReplaces("The code is on Gitlab.")).toBe("The code is on GitLab.")
    expect(applyReplaces("at gitlab.com/something")).toBe("at gitlab.com/something")
    expect(applyReplaces("The code is on GITLSB")).toBe("The code is on GitLab")
    expect(applyReplaces("at https://GitLab.com/something")).toBe("at https://gitlab.com/something")

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