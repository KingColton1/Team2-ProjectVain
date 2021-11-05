const db = require('../config/db.config');
const pool = db.pool;

const getAllAuthors = (req, res) => {
    console.log('Author Data: ');
    pool.query('SELECT * FROM author')
    .then(authorData => {
        console.log(authorData);
        res.send(authorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getAuthorById = (req, res) => {
    pool.query('SELECT * FROM author WHERE author_id = $1', [req.params.id])
    .then(authorData => {
        console.log(authorData);
        res.send(authorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewAuthor = (req, res) => {
    // specify json for body values
    const { author } = req.body;
    pool.query('INSERT INTO author (author) VALUES ($1)', [author])
    .then(authorData => {
        res.send(authorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const updateAuthorById = (req, res) => {
    const { author } = req.body;
    pool.query('UPDATE author SET author = $1 WHERE author_id = $2', [author, req.params.id])
    .then(() => {
        res.send(`Author updated with author_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

const deleteAuthor = (req, res) => {
    pool.query('DELETE FROM author WHERE author_id = $1', [req.params.id])
    .then(() => {
        res.send(`Author deleted with author_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthorById,
    deleteAuthor,
}