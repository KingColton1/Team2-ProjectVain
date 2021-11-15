const db = require('../config/db.config');
const pool = db.pool;

const getAllBooks = (req, res) => {
    pool.query('SELECT * FROM book')
    .then(bookData => {
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getBookById = (req, res) => {
    pool.query('SELECT * FROM book WHERE book_id = $1', [req.params.id])
    .then(bookData => {
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewBook = (req, res) => {
    const { authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdated } = req.body;
    console.log(req.body);
    pool.query('INSERT INTO book (authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING book_id', [authorship, title, year, description, namedpersons, notes, located, modifiedby, lastupdated])
    .then(bookData => {
        res.send(bookData);
    })
    .catch(e => console.error(e));
}

const deleteBook = (req, res) => {
    pool.query('DELETE FROM book WHERE book_id = $1', [req.params.id])
    .then(() => {
        res.send(`Book deleted with book_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

const getBooksByYear = (req, res) => {
    pool.query('SELECT * FROM book WHERE year = $1', [req.params.year])
    .then(bookData => {
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getBooksByYearRange = (req, res) => {

}

// Trying to figure out how to dynamically create SQL for the filters
const getFilteredBooks = (req, res) => {
    // Before making the query, need to loop through the request to see what filters are being used

    // pool.query('SELECT * FROM book')
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    deleteBook,
    getBooksByYear,
    getBooksByYearRange
}