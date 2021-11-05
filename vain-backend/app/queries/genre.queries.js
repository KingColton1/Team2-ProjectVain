const db = require('../config/db.config');

const getAllGenres = (req, res) => {
    db.pool.query('SELECT * FROM book_genre')
    .then(genreData => {
        console.log(genreData);
        res.send(genreData.rows);
    })
    .catch(e => console.error(e.stack));
}

const getGenreById = (req, res) => {
    db.pool.query('SELECT * FROM book_genre WHERE genre_id = $1', [req.params.id])
    .then(genreData => {
        console.log(genreData);
        res.send(genreData.rows);
    })
    .catch(e => console.error(e.stack));
}

const addNewGenre = (req, res) => {
    // specify json for body values
    const { id, genre } = req.body;
    db.pool.query('INSERT INTO book_genre (genre_id, genre) VALUES ($1, $2)', [id, genre])
    .then(genreData => {
        res.send(`New genre added with genre_id: ${id}`);
    })
    .catch(e => console.error(e.stack));
}

const updateGenreById = (req, res) => {
    const { genre } = req.body;
    db.pool.query('UPDATE book_genre SET genre = $1 WHERE genre_id = $2', [genre, req.params.id])
    .then(() => {
        res.send(`Genre updated with genre_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

const deleteGenre = (req, res) => {
    db.pool.query('DELETE FROM book_genre WHERE genre_id = $1', [req.params.id])
    .then(() => {
        res.send(`Genre deleted with genre_id: ${req.params.id}`);
    })
    .catch(e => console.error(e.stack));
}

module.exports = {
    getAllGenres,
    getGenreById,
    addNewGenre,
    updateGenreById,
    deleteGenre,
}