const express = require('express');

// solve cors issue?
const cors = require('cors');
var bodyParser = require("body-parser");
const app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.use(cors());
app.use(bodyParser.json());
const port = 5000;
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vain_db',
    password: 'student',
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

app.get('/users', (req, res, next) => {
    console.log('User data: ');
    pool.query('SELECT * FROM user_vain')
        .then(userData => {
            console.log(userData);
            res.send(userData.rows);
        });
});

app.get('/genres', (req, res, next) => {
    console.log('Genre data: ');
    pool.query('SELECT * FROM book_genre')
        .then(genreData => {
            console.log(genreData);
            res.send(genreData.rows);
        });
});

app.get('/publishers', (req, res, next) => {
    console.log('Publisher Data: ');
    pool.query('SELECT * FROM publisher')
        .then(publisherData => {
            console.log(publisherData);
            res.send(publisherData.rows);
        });
});

app.get('/authors', (req, res, next) => {
    console.log('Author Data: ');
    pool.query('SELECT * FROM author')
        .then(authorData => {
            console.log(authorData);
            res.send(authorData.rows);
        });
});

app.get('/types', (req, res, next) => {
    console.log('Type Data: ');
    pool.query('SELECT * FROM book_type')
        .then(typeData => {
            console.log(typeData);
            res.send(typeData.rows);
        });
});

app.get('/books', (req, res, next) => {
    console.log('Book Data: ');
    pool.query('SELECT * FROM book')
        .then(bookData => {
            console.log(bookData);
            res.send(bookData.rows);
        });
});

app.get('/bookAuthors', (req, res, next) => {
    console.log('Book Author Data: ');
    pool.query('SELECT * FROM author_book')
        .then(bookAuthorData => {
            console.log(bookAuthorData);
            res.send(bookAuthorData.rows);
        });
});

app.get('/bookPublishers', (req, res, next) => {
    console.log('Book Publisher Data: ');
    pool.query('SELECT * FROM publisher_book')
        .then(bookPublisherData => {
            console.log(bookPublisherData);
            res.send(bookPublisherData.rows);
        });
});

app.post('/books', (req, res, next) => {
    console.log(req.body);
    res.send("This Worked "+ req.body.title);
});

app.listen(port, () => {
    console.log(`vain backend app is running on port ${port}`);
});

