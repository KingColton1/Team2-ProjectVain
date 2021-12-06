const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vain_db',
<<<<<<< HEAD
    password: 'student',
=======
    password: 'localhost',
>>>>>>> a1e7baa7c9ff6753a38351fb4be0385c26360e34
    dialect: 'postgres',
    port: 5432
});

// database connection
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log('Connected to database!');
    })
});

module.exports = {
    pool,
}