const devArea = {
    version: "01ab",
    production: true,
}

// hidden const
const apiURL = {
    url: "www.google.com/api",
};


const client = {
    device: "web",
    api: apiURL.url,
}

module.exports = {
    devArea, 
    client
}