const fs = require('fs').promises

const { asyncMap } = require('./utils/asyncArray.js');
const { glob, readFileString} = require('./utils/files.js');
const getUnintelligiblesWithLineNumber = require('./utils/getUnintelligibles.js').getUnintelligiblesWithLineNumber



main()

async function main(globPattern = '**/*.md') {

    const files = await unintelligiblesReport(globPattern)

    const shows = groupBy(files, 'show')
    shows.forEach(show => {
        show.numUnintelligibles = show.episodes.map(ep => ep.unintelligibles.length).reduce((a,b) => a + b)
    })

    // console.log(JSON.stringify(shows, null, 2))

    let result = "This issue lists all of the unintelligibles in the transcripts.\n\nIt's automatically updated using a GitHub Action.\n\n"

    result += shows.map(show => {
        return [`## ${show.show}`, `<details><summary>${show.numUnintelligibles} unintelligibles in ${show.episodes.length} episodes</summary>`, renderEpisodes(show.episodes), '</details>' ].join('\n')
    }).join('\n\n')


    await fs.writeFile('./unintelligibles.md', result)
    


    function renderEpisodes(episodes) {
        return episodes.map(({ filename, unintelligibles, name, show }) => {
            return ['<details>', '<summary>', `<h4 style="display:inline"> ${name} (${unintelligibles.length}) </h4>`, '</summary>', ...unintelligibles.map(({ text, line }) => `\nLine ${line}: ${text}`), '</details>'].join('\n');
        }).join('\n\n');
    }
}

async function unintelligiblesReport(globPattern = '**/*.md') {

    const filenames = await glob(globPattern)
    
    const files = (await asyncMap(filenames, async filename => {
        const text = await readFileString(filename);
        const unintelligibles = getUnintelligiblesWithLineNumber(text)
        let [show, name] = filename.split('/')
        if (show === 'podcast') show = 'Changelog'
        return {filename, show, name, unintelligibles}
    })).filter(file => file.unintelligibles.length)

    return files

}

function groupBy(array, field, entriesName = 'episodes') {
    const obj = {}
    array.forEach(item => {
        const key = item[field]
        obj[key] = obj[key] || []
        obj[key].push(item)
    })
    return Object.entries(obj).map(([key, val]) => ({[field]: key, [entriesName]: val}))
}