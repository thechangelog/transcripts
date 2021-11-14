function getUnintelligibles(mdString) {
    const regexUnintelligible = /\\\[unintelligible [\d:\.]+\\\]/gm;
    const matches = mdString.match(regexUnintelligible);
    return matches || []
}

function getUnintelligiblesWithLineNumber(mdString) {
    const lines = mdString.split('\n');
    const unintelligibles = lines.flatMap((line, i) => {
        return getUnintelligibles(line).map(text => ({text, line: i+1}));
    });
    return unintelligibles;
}

module.exports = {
    getUnintelligibles,
    getUnintelligiblesWithLineNumber,
    guwln: getUnintelligiblesWithLineNumber
}