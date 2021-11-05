const db = require('../config/db.config');
const pool = db.pool;

const getAllBooks = (req, res) => {
    console.log('Book Data: ');
    pool.query('SELECT * FROM book')
    .then(bookData => {
        console.log(bookData);
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getBookById = (req, res) => {
    pool.query('SELECT * FROM book WHERE book_id = $1', [req.params.id])
    .then(bookData => {
        console.log(bookData);
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewBook = (req, res) => {
    const { title, year, desc, notes, people, authors, publishers, genre, type } = req.body;
    pool.query('INSERT INTO book (type, hadHelp, genre, title, year, description, namedPersons, notes, located, modifiedby, lastupdated, publisher, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
        [type, 'U', genre, title, year, desc, people, notes, '', 'System', new Date('2021-10-31'), publishers, authors])
    .then(bookData => {
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const deleteBook = (req, res) => {
    pool.query('DELETE FROM book WHERE book_id = $1', [req.params.id])
    .then(() => {
        res.send(`Book deleted with book_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

const updateBookById = (req, res) => {
    const { title, hadHelp, year, desc, notes, people, located, authors, publishers, genre, type, lastUpdated, modifiedBy } = req.body;
    pool.query('UPDATE book SET author = $1, WHERE book_id = $2', [type, hadHelp, genre, title, year, desc, people, notes, located, modifiedBy, lastUpdated, publishers, authors, req.params.id])
    .then(() => {
        res.send(`Book updated with book_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    deleteBook,
    updateBookById,
}