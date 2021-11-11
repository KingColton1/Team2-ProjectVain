const db = require('../config/db.config');
const pool = db.pool;

const getBooksGroupByYear = (req, res) => {
    pool.query(`SELECT COUNT(*), year FROM book GROUP BY year`)
    .then(bookData => {
        res.send(bookData.rows);
    })
    .catch(e => console.error(e.stack));
}

// other report ideas:
// publisher counts
// type counts?? subject

module.exports = {
    getBooksGroupByYear
}