// Configuration file for Sanity
const { createClient } = require('sanity');

const client = createClient({
    project: 'myproject',
    compilation: {
        ssha: 'myserverPassword',
        transport: false
    },
    dev: true,
    use_csv: true,
    api: 'https://api.sanity.com'
});

module.exports = client;
