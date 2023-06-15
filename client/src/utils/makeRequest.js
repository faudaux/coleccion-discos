



// eslint-disable-next-line no-unused-vars
async function makeRequest (url, method, query) {
    return fetch(url + new URLSearchParams(query), {method: method})
    .then(data => data.json())
}

export default makeRequest