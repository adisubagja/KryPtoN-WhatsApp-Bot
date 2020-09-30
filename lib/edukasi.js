const { fetchJson } = require('../utils/fetcher')

const brainly = (text) => new Promise((resolve, reject)=> {
    console.log('Get metadata from =>', text)
    var query = text.replace(/ /g, "%20");
    if (query.length === 0 ) reject('Harap masukan pertanyaan yang di cari!')
    fetchJson('https://smsh2h.net/api/brainly?query=' + query, { method: 'GET' })
        .then((result) => {
            const key = result.code
            switch (key) {
            case 404:
              return reject('The link you followed may be broken, or the page may have been removed.')
            default:
            return resolve(result)
            }
            }).catch((err) => {
              console.error(err)
              reject(err)
            })
})

module.exports = {
    brainly
}