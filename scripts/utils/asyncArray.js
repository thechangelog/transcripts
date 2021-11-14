async function asyncMap(array, fn) {
    return Promise.all(array.map(fn));
}

async function asyncForEach(array, fn) {
    await Promise.all(array.map(fn));
}

async function asyncChunkedForEach(array, fn, n = 10) {
    for (let i = 0; i < array.length; i = i + n) {
        const t = Date.now()
        console.log(`starting chunk ${i} to ${i + n - 1} out of ${array.length}`)
        await asyncForEach(array.slice(i, i + n), fn)
        console.log(`finished with chunk in ${(Date.now() - t)/1000}s`)
    }
}

module.exports = {
    asyncMap,
    asyncForEach,
    asyncChunkedForEach,
}