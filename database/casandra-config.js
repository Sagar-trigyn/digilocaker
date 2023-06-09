const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], localDataCenter: 'datacenter1' });
client.connect()
    .then(() => console.log('Connected to Cassandra'))
    .catch(err => console.error(err));

module.exports = client