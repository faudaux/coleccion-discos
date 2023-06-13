



// eslint-disable-next-line no-unused-vars
async function makeRequest (url, method, _query) {
    return fetch(url, {method: method})
    .then(data => data.json())
}

export default makeRequest