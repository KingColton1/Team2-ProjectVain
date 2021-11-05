const db = require('../config/db.config');
const pool = db.pool;

const getAllBookPublishers = (req, res) => {
    console.log('Book Publisher Data: ');
    pool.query('SELECT * FROM publisher_book')
    .then(bookPublisherData => {
        console.log(bookPublisherData);
        res.send(bookPublisherData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewBookPublishers = (req, res) => {
    // specify json for body values
    const { book_id, publisher_id } = req.body;
    pool.query('INSERT INTO publisher_book (publisher_id, book_id) VALUES ($1, $2)', [publisher_id, book_id])
    .then(bookPublisherData => {
        res.send(bookPublisherData.rows);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllBookPublishers,
    addNewBookPublishers,
}