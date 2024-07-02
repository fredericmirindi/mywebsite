// Configuration file for Sanity
const { definconfiguration } = require('sanity');

const config = definconfiguration({
    project: 'myproject',
    database: {
        api: 'https://api.sanity.com',
        dataset: 'mydatabase'
    }
});

module.exports = config;
