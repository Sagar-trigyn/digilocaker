const { Client } = require('cassandra-driver');
const config = require('../config/config')

// console.log(config,'kl')
// const authr

const client = new Client({
    contactPoints: [config.contactPoints],
    localDataCenter: config.localDataCenter,
    keyspace: config.keyspace
});

// if (client) {
//     console.log(client)
// }
// else{
//     console.log('false')
// }

module.exports = client
