const db = require('../config/db.config');
const pool = db.pool;

const getAllBookAuthors = (req, res) => {
    console.log('Book Author Data: ');
    pool.query('SELECT * FROM author_book')
    .then(bookAuthorData => {
        console.log(bookAuthorData);
        res.send(bookAuthorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewBookAuthors = (req, res) => {
    // specify json for body values
    const { book_id, author_id } = req.body;
    pool.query('INSERT INTO author_book (author_id, book_id) VALUES ($1, $2)', [author_id, book_id])
    .then(bookAuthorData => {
        res.send(bookAuthorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getBookAuthorEntry = (req, res) => {
    console.log(req.params);
    pool.query('SELECT * FROM author_book WHERE book_id = $1 AND author_id = $2', [req.params.book, req.params.author])
    .then(bookAuthorData => {
        console.log(bookAuthorData);
        res.send(bookAuthorData.rows);
    })
    .catch(e => console.error(e.stack));
}

const deleteBookAuthorEntry = (req, res) => {
    pool.query('DELETE FROM author_book WHERE book_id = $1 AND author_id = $2', [req.params.book, req.params.author])
    .then(() => {
        res.send(`Book Author Entry deleted with book_id: ${req.params.book} and author_id: ${req.params.author}`);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllBookAuthors,
    addNewBookAuthors,
    getBookAuthorEntry,
    deleteBookAuthorEntry
}