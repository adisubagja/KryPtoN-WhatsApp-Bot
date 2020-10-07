const { fetchJson } = require('../utils/fetcher')

module.exports = (usr) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', usr)
    fetchJson('https://mhankbarbar.herokuapp.com/api/stalk?username=' + usr)
        .then((result) => {
            if (result.status != 200) return resolve(result.status)

            resolve(result)
            }).catch((err) => {
                console.error(err)
                reject(err)
            })
})