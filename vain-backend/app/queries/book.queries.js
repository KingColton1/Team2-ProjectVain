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
    const { authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdated } = req.body;
    pool.query('INSERT INTO book (authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdated])
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

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    deleteBook
}