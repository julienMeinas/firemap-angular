const PROXY_CONFIG = [
    {
        context: [
            "/fireworks"
        ],
        target: "http://firemap-api-rest.herokuapp.com/",
        secure: false
    }
]

module.exports = PROXY_CONFIG;