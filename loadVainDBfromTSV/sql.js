
const ifDBExists = "SELECT datname FROM pg_catalog.pg_database where datname ='vain_db';"
const createDBs = "DROP TABLE IF EXISTS public.user;"+
 "CREATE TABLE public.user ("+
 " user_id varchar(45) NOT NULL,"+
 "  fName varchar(45) NOT NULL,"+
 "  lName varchar(45) NOT NULL,"+
 "  email varchar(45) NOT NULL,"+
 "  PRIMARY KEY (user_id)) ;"+
 ""+
 "INSERT INTO public.user VALUES ('System','System','System','NA');"+
 ""+
 "DROP TABLE IF EXISTS public.book_genre;"+
 ""+
 "CREATE TABLE public.book_genre ("+
 "  genre varchar(45) DEFAULT NULL,"+
 "  genre_id varchar(2) NOT NULL,"+
 "  PRIMARY KEY (genre_id)"+
 ");"+
 ""+
 ""+
 ""+
 "INSERT INTO public.book_genre VALUES ('Adventure','A'),('Criminal','C'),('Domestic','D'),('Great Man','G'),('Historical','H'),('Literary','L'),('Military','M'),('Politics','P'),('Religious','R'),('Satire','S'),('Travel','T'),('Celebrity','CY'),('Middle-class, MC','MC'),('Social Critique','SC'),('School Days','SD'),('Theatre','TH'),('Unknown','U');"+
 ""+
 ""+
 "DROP TABLE IF EXISTS public.book_type;"+
 ""+
 "CREATE TABLE public.book_type ("+
 "  type_id varchar(2) NOT NULL,"+
 "  type varchar(45) DEFAULT NULL,"+
 "  PRIMARY KEY (type_id)"+
 ");"+
 ""+
 "INSERT INTO public.book_type VALUES ('A','Autobiography'),('B','Biography'),('C','Compilation'),('D','Diary/Journal'),('F','Fictional'),('G','Broadside'),('L','Letters'),('U','Unknown');"+
 ""+
 ""+
 "DROP TABLE IF EXISTS public.book;"+
 ""+
 "CREATE TABLE public.book ("+
 "  book_id serial NOT NULL,"+
 "  type varchar(2) DEFAULT NULL,"+
 "  hadHelp varchar(2) DEFAULT NULL,"+
 "  genre varchar(2) DEFAULT NULL,"+
 "  title text,"+
 "  year int DEFAULT NULL,"+
 "  description text,"+
 "  namedPersons text,"+
 "  notes text,"+
 "  located varchar(450) DEFAULT NULL,"+
 "  modifiedBy varchar(45) DEFAULT NULL,"+
 "  lastUpdated date DEFAULT NULL,"+
 "  publisher text,"+
 "  author text,"+
 "  PRIMARY KEY (book_id),"+
 "  "+
 "  CONSTRAINT fk_genre FOREIGN KEY (genre) REFERENCES public.book_genre (genre_id),"+
 "  CONSTRAINT fk_type FOREIGN KEY (type) REFERENCES public.book_type (type_id),"+
 "  CONSTRAINT fk_user FOREIGN KEY (modifiedBy) REFERENCES public.user (user_id)"+
 ");"+
 ""+
 "DROP TABLE IF EXISTS public.publisher;"+
 ""+
 "CREATE TABLE public.publisher ("+
 "  publisher_id serial NOT NULL ,"+
 "  publisher varchar(200) DEFAULT NULL,"+
 "  publisherLocation varchar(200) DEFAULT NULL,"+
 "publisherfull varchar(200) DEFAULT NULL,"+
 "  PRIMARY KEY (publisher_id)"+
 ") ;"+
 ""+
 "DROP TABLE IF EXISTS  public.author;"+
 ""+
 "CREATE TABLE  public.author ("+
 "  author_id SERIAL NOT NULL,"+
 "  author varchar(200) DEFAULT NULL,"+
 "  PRIMARY KEY (author_id)"+
 ") ;"+
 ""+
 ""+
 "DROP TABLE IF EXISTS public.publisher_book;"+
 ""+
 "CREATE TABLE public.publisher_book ("+
 "  publisher_id int NOT NULL,"+
 "  book_id int NOT NULL,"+
 "  PRIMARY KEY (publisher_id,book_id),"+
 "  CONSTRAINT fk_publisher_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id),"+
 "  CONSTRAINT fk_publisher_id FOREIGN KEY (publisher_id) REFERENCES public.publisher (publisher_id)"+
 ");"+
 ""+
 ""+
 ""+
 "DROP TABLE IF EXISTS public.author_book;"+
 ""+
 "CREATE TABLE public.author_book ("+
 "  author_id int NOT NULL,"+
 "  book_id int NOT NULL,"+
 "  PRIMARY KEY (author_id,book_id),"+
 "  CONSTRAINT fk_author_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id),"+
 "  CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES public.author (author_id));";
 
 const insertBook = `INSERT INTO book ( type, hadHelp, genre, title, year, description, namedPersons, notes, located, modifiedBy, lastUpdated, publisher, author) 
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,'System', now(), $10, $11)
 `;
const getPubliserFromBook = `SELECT distinct publisher
                                FROM book;`;
const getPubliserWithBookIDFromBook = `SELECT book_id, publisher
                                FROM public.book;`;
const getPubliserWithPublisherIDFromPublisher = `SELECT publisher_id, publisherfull
                                FROM public.publisher;`;
const insertNewPublisher = `INSERT INTO public.publisher ( publisher, publisherlocation, publisherfull) VALUES ($1, $2, $3);`;
const insertNewPublisherBook = `INSERT INTO public.publisher_book ( publisher_id, book_id) VALUES ($1, $2);`;

const getAuthorFromBook = `SELECT distinct author
                                FROM public.book;`;
const getAuthorWithBookIDFromBook = `SELECT book_id, author
                                FROM public.book;`;
const getAuthorWithAuthorIDFromAuthor = `SELECT author_id, author
                                FROM public.author;`;
const insertNewAuthor = `INSERT INTO public.author ( author) VALUES ($1);`;
const insertNewAuthorBook = `INSERT INTO public.author_book ( author_id, book_id) VALUES ($1, $2);`;
 

 module.exports = {createDBs, insertBook, getPubliserFromBook, insertNewPublisher, getPubliserWithBookIDFromBook, getPubliserWithPublisherIDFromPublisher, insertNewPublisherBook,
    getAuthorFromBook, getAuthorWithBookIDFromBook, getAuthorWithAuthorIDFromAuthor, insertNewAuthor, insertNewAuthorBook,ifDBExists };