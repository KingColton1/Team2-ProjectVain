const express = require('express');
const cors = require('cors');
const app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

// calls to query files
const genres = require('./app/queries/genre.queries');
const types = require('./app/queries/type.queries');
const publishers = require('./app/queries/publisher.queries');
const authors = require('./app/queries/author.queries');
const users = require('./app/queries/user.queries');
const books = require('./app/queries/book.queries');
const bookAuthors = require('./app/queries/bookAuthor.queries');
const bookPublishers = require('./app/queries/bookPublisher.queries');

// users paths
app.get('/users', users.getAllUsers);
app.get('/users/:id', users.getUserById);
app.post('/users', users.addNewUser);
app.put('/users/:id', users.updateUserById);
app.delete('/users/:id', users.deleteUser);


// genres paths
app.get('/genres', genres.getAllGenres);
app.get('/genres/:id', genres.getGenreById);
app.post('/genres', genres.addNewGenre);
app.put('/genres/:id', genres.updateGenreById);
app.delete('/genres/:id', genres.deleteGenre);


// publishers paths
app.get('/publishers', publishers.getAllPublishers);
app.get('/publishers/:id', publishers.getPublisherById);
app.post('/publishers', publishers.addNewPublisher);
app.put('/publishers/:id', publishers.updatePublisherById);
app.delete('/publishers/:id', publishers.deletePublisher);


// authors paths
app.get('/authors', authors.getAllAuthors);
app.get('/authors/:id', authors.getAuthorById);
app.post('/authors', authors.addNewAuthor);
app.put('/authors/:id', authors.updateAuthorById);
app.delete('/authors/:id', authors.deleteAuthor);


// types paths
app.get('/types', types.getAllTypes);
app.get('/types/:id', types.getTypeById);
app.post('/types', types.addNewType);
app.put('/types/:id', types.updateTypeById);
app.delete('/types/:id', types.deleteType);


// books paths
app.get('/books', books.getAllBooks);
app.get('/books/:id', books.getBookById);
app.post('/books', books.addNewBook);
// put

app.delete('/books/:id', books.deleteBook);

// book authors paths
app.get('/bookAuthors', bookAuthors.getAllBookAuthors);
app.get('/bookAuthors/:book&:author', bookAuthors.getBookAuthorEntry);
app.post('/bookAuthors', bookAuthors.addNewBookAuthors);

// book publishers paths
app.get('/bookPublishers', bookPublishers.getAllBookPublishers);
app.post('/bookPublishers', bookPublishers.addNewBookPublishers);

app.listen(port, () => {
    console.log(`vain backend app is running on port ${port}`);
});

