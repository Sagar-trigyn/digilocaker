const client = require('../database/casandra-config')

exports.PostData = async (req, res) => {
    try {
        const { id, name, email } = req.body;
        const query = 'INSERT INTO demo.user(id, name, email) VALUES (?, ?, ?)';
        const params = [id, name, email];
        client.execute(query, params, { prepare: true })
            .then(result => res.json({ message: 'User created' }))
            .catch(err => res.status(500).send(err));

    } catch (error) {
        res.status(500).json({
            message: "something went wrong !"
        })
        console.log(error)
    }
}

exports.getData = async (req, res) => {
    const query = 'SELECT * FROM demo.user';
    client.execute(query)
        .then(result => res.json(result.rows))
        .catch(err => res.status(500).send(err));
}