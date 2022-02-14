const fs = require('fs').promises
const os = require('os')
const path = require('path')

const {applyReplaces, getTranscripts, processFile}= require('./format')

test("timestamp formatting", () => {
    expect(applyReplaces('\[00:04:06.27\]')).toBe('\\[04:06\\]')
    expect(applyReplaces('\[00:10:17.78\]')).toBe('\\[10:17\\]')
    expect(applyReplaces('\[03:43.78\]')).toBe('\\[03:43\\]')
    expect(applyReplaces('\\[00:01:46\\]')).toBe('\\[01:46\\]')
    expect(applyReplaces('\\\[00:04:06.27\\\]')).toBe('\\[04:06\\]')
    expect(applyReplaces('\\\[00:10:17.78\]')).toBe('\\[10:17\\]')
    expect(applyReplaces('\[03:43.78\\\]')).toBe('\\[03:43\\]')
})

test("code backticks remove extra '\' character formatting", () => {
    expect(applyReplaces("\\`console.log($TOKEN)\\`")).toBe('`console.log($TOKEN)`')
    expect(applyReplaces("The difference between \\`foo\\` and \\`bar\\`")).toBe('The difference between `foo` and `bar`')
})

test("'JavaScript' has only one form", () => {
    expect(applyReplaces("I love javascript!")).toBe("I love JavaScript!")
    expect(applyReplaces("r/javascript")).toBe("r/javascript")
})

test("go fmt is always 2 words and has code backtics around it", () => {
    expect(applyReplaces("So then you type gofmt and go from there.")).toBe("So then you type `go fmt` and go from there.")
    expect(applyReplaces("I love gofmt.")).toBe("I love `go fmt`.")
})

test("All instances of MLOps, AIOps, ClickOps are uniform", () => {
    expect(applyReplaces("ML Ops is ml ops, but OCAML ops is not")).toBe("MLOps is MLOps, but OCAML ops is not")
    expect(applyReplaces("AI Ops is ai-Ops, but psy ops is not")).toBe("AIOps is AIOps, but psy ops is not")
    expect(applyReplaces("Click ops is click-ops, but psy ops is not")).toBe("ClickOps is ClickOps, but psy ops is not")
})

test("email never has the hyphen", () => {
    expect(applyReplaces("I just got an e-mail.")).toBe("I just got an email.")
    expect(applyReplaces("E-mail will replace Slack.")).toBe("Email will replace Slack.")
})

test("open source' and 'closed source' every time", () => {
    expect(applyReplaces("Opensource is the best")).toBe('Open source is the best')
    expect(applyReplaces("It's an open-source thing")).toBe("It's an open source thing")
    expect(applyReplaces("We open-sourced it")).toBe("We open sourced it")
    expect(applyReplaces("They are open-sourcing it soon")).toBe("They are open sourcing it soon")
    expect(applyReplaces("There's a great article on opensource.com on this")).toBe("There's a great article on opensource.com on this")
    expect(applyReplaces("What's wrong with close-sourced stuff")).toBe("What's wrong with close sourced stuff")
    expect(applyReplaces("It's a closed-source thing")).toBe("It's a closed source thing")

})

test("GitHub and GitLab is correct", () => {
    expect(applyReplaces("The code is on github.")).toBe("The code is on GitHub.")
    expect(applyReplaces("at github.com/thechangelog/transcripts")).toBe("at github.com/thechangelog/transcripts")
    expect(applyReplaces("The code is on GITHUB")).toBe("The code is on GitHub")
    expect(applyReplaces("at https://GitHub.com/thechangelog/transcripts")).toBe("at https://github.com/thechangelog/transcripts")
    
    expect(applyReplaces("The code is on Gitlab.")).toBe("The code is on GitLab.")
    expect(applyReplaces("at gitlab.com/something")).toBe("at gitlab.com/something")
    expect(applyReplaces("The code is on GITLAB")).toBe("The code is on GitLab")
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