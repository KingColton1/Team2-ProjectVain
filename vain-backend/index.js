const express = require('express');
const cors = require('cors');
const app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is wrong!')
  })
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

// calls to query files
const subjects = require('./app/queries/subject.queries');
const roles = require('./app/queries/role.queries');
const types = require('./app/queries/type.queries');
const publishers = require('./app/queries/publisher.queries');
const users = require('./app/queries/user.queries');
const books = require('./app/queries/book.queries');
const bookAuthors = require('./app/queries/bookAuthor.queries');
const bookPublishers = require('./app/queries/bookPublisher.queries');
const namedPersons = require('./app/queries/namedPersons.queries');
const bookSubjects = require('./app/queries/bookSubject.queries');
const bookTypes = require('./app/queries/bookType.queries');
const reports = require('./app/queries/report.queries');

// login path
app.get('/login', (req, res) => {res.send("login page")});

// users paths
app.get('/users', users.getAllUsers);
app.get('/users/user/:id', users.getUserById);
app.post('/users', users.addNewUser);
app.put('/users/user/:id', users.updateUserById);
app.delete('/users/user/:id', users.deleteUser);


// roles paths
app.get('/roles', roles.getAllRoles);
app.get('/roles/role/:id', roles.getRoleById);
app.post('/roles', roles.addNewRole);
app.put('/roles/role/:id', roles.updateRoleByid);
app.delete('/roles/role/:id', roles.deleteRole);


// genres paths
app.get('/subjects', subjects.getAllSubjects);
app.get('/subjects/subject/:id', subjects.getSubjectById);
app.post('/subjects', subjects.addNewSubject);
app.put('/subjects/subject/:id', subjects.updateSubjectById);
app.delete('/subjects/subject/:id', subjects.deleteSubject);


// publishers paths
app.get('/publishers', publishers.getAllPublishers);
app.get('/publishers/publisher/:id', publishers.getPublisherById);
app.post('/publishers', publishers.addNewPublisher);
app.put('/publishers/publisher/:id', publishers.updatePublisherById);
app.delete('/publishers/publisher/:id', publishers.deletePublisher);


// namedpersons paths
app.get('/namedpersons', namedPersons.getAllNamedPersons);
app.get('/namedpersons/person/:id', namedPersons.getNamedPersonByAuthorId);
app.post('/namedpersons', namedPersons.addNewNamedPerson);
app.put('/namedpersons/person/:id', namedPersons.updateNamedPersonByAuthorId);
app.delete('/namedpersons/person/:id', namedPersons.deleteNamedPerson);


// types paths
app.get('/types', types.getAllTypes);
app.get('/types/type/:id', types.getTypeById);
app.post('/types', types.addNewType);
app.put('/types/type/:id', types.updateTypeById);
app.delete('/types/type/:id', types.deleteType);


// books paths
app.get('/books', books.getAllBooks);
app.get('/books/book/:id', books.getBookById);
app.get('/books/years/:year', books.getBooksByYear);
app.post('/books', books.addNewBook);
// put
app.delete('/books/book/:id', books.deleteBook);


// book authors paths
app.get('/bookAuthors', bookAuthors.getAllBookAuthors);
app.post('/bookAuthors', bookAuthors.addNewBookAuthors);
app.get('/bookAuthors/author/:author', bookAuthors.getAllBooksWithAuthor);


// book publishers paths
app.get('/bookPublishers', bookPublishers.getAllBookPublishers);
app.post('/bookPublishers', bookPublishers.addNewBookPublishers);
app.get('/bookPublishers/publisher/:publisher', bookPublishers.getAllBooksWithPublisher);


// book types paths
app.get('/bookTypes', bookTypes.getAllBookTypes);
app.post('/bookTypes', bookTypes.addNewBookType);
app.get('/bookTypes/type/:type', bookTypes.getAllBooksWithType);


// book subjects paths
app.get('/bookSubjects', bookSubjects.getAllBookSubjects);
app.post('/bookSubjects', bookSubjects.addNewBookSubject);
app.get('/bookSubjects/subject/:subject', bookSubjects.getAllBooksWithSubject);


// queries for reports
app.get('/reports/year', reports.getBooksGroupByYear);
app.get('/reports/type', reports.getBooksGroupByType);
app.get('/reports/subject', reports.getBooksGroupBySubject);

app.listen(port, () => {
    console.log(`vain backend app is running on port ${port}`);
});

