var needle = require('needle')

const brainly = (query) => new Promise((resolve, reject)=> {
    console.log('Get metadata from =>', query)
    let url = 'https://smsh2h.net/api/brainly?query='
    if (query.length === 0 ) reject('Harap masukan pertanyaan yang di cari!')
        needle(url + query, async (err, resp, body) => {
            try {
                resolve(body.result)
            } catch (err) {
                reject(err)
            }
        })
})

module.exports = {
    brainly
}