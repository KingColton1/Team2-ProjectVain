const db = require('../config/db.config');
const pool = db.pool;

const getAllPublishers = (req, res) => {
    console.log('Publisher Data: ');
    pool.query('SELECT * FROM publisher')
    .then(publisherData => {
        console.log(publisherData);
        res.send(publisherData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getPublisherById = (req, res) => {
    pool.query('SELECT * FROM publisher WHERE publisher_id = $1', [req.params.id])
    .then(publisherData => {
        console.log(publisherData);
        res.send(publisherData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewPublisher = (req, res) => {
    // specify json for body values
    const { publisher, location } = req.body;
    const full = `${location}: ${publisher}`;
    pool.query('INSERT INTO publisher (publisher, publisherLocation, publisherFull) VALUES ($1, $2, $3)', [publisher, location, full])
    .then(publisherData => {
        console.log(publisherData);
        res.send(publisherData.rows);
    })
    .catch(e => console.error(e.stack));
}

const updatePublisherById = (req, res) => {
    const { publisher, location } = req.body;
    const full = `${location}: ${publisher}`;
    pool.query('UPDATE publisher SET publisher = $1, publisherLocation = $2, publisherFull = $3 WHERE publisher_id = $4', [publisher, location, full, req.params.id])
    .then(() => {
        res.send(`Publisher updated with publisher_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

const deletePublisher = (req, res) => {
    pool.query('DELETE FROM publisher WHERE publisher_id = $1', [req.params.id])
    .then(() => {
        res.send(`Publisher deleted with publisher_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllPublishers,
    getPublisherById,
    addNewPublisher,
    updatePublisherById,
    deletePublisher,
}