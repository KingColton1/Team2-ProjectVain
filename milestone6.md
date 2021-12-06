*Milestone 3 - Layers*

Sarah Irons; Colton Bailiff; Nathan Radin; David Niggli
October 8, 2021

## Team Members and Roles
- Sarah Irons - Programmer/Designer
- Colton Bailiff - Front-end Lead
- Nathan Radin - Team Lead
- David Niggli - DB Admin
 
## Background
There are many autobiographies from the Victorian Era that Vein has collected together. These autobiographies range from the wealthy to the poor, passing through a multitude of genres and stories. Vein would like for us to create a maintainable database to store these records, as well as an interactive application to allow for people to search for different autobiographies.

## Project Description
Create a database filled with titles, genres, authors, publisher(s), and any other associated notes towards Victorian era autobiographies so that there is one location that a user can go to to search them.  Scholars should be able to search the database to get results and admins should have the ability to update and add entries as needed.  Our group has been supplied with the data of the autobiographies and we will create a database to contain that information.

## Project Requirements
- Users should be able to search the database using some form of front-end and those searches should utilize a variety of filters to pinpoint the exact desired result.
- Admins of the database should be able to enter new information for new entries, as well as update existing entries to reflect more up-to-date information.
- Create a maintainable/scalable/normalized database to contain the information of the autobiographies
- Search results should have the ability to be sorted by several means (author, title, year, etc).
- Logged in users will be able to save books within their accounts in order to have quick access to them in the future.

## Business Rules
- Different user types should have different abilities and functions within the program.  Editing and adding to the database should be restricted to admin or masterAdmin roles.
- A guest user does exist, although they are only allowed to view the various entries that already exist within the system as well as having the ability to search for books.
- Any logged in user (whether student or scholar or admin) will be able to do the same as the guest, but will added searching abilities and other features like: saving books for later convenience, custom reports from advanced searches, and references to different citation styles for the autobiographies

## Technologies Used
For the database portion of the project, we will be using PostgresQL to create/maintain the database and its entries. For the front-end of the application, we will be using Vue.js, a popular javascript framework.

- PostgresQL
- Vue
- Node.js

## Design Patterns
### MVVM - Model View ViewModel
Vue uses the MVVM pattern instead of MVC, hence why we are listing MVVM as one of our patterns we plan to use.

Model
The model will primarily contain a Book class for each book within the database, as well as some of the database functions for the users (searching/editing). The model section will generate the different search results that the user is looking for, or create a new Book if an admin is inserting one.

View
The view will be the front-end component of the application (as of writing it will be written in Vue.js) which will allow the user to do a variety of tasks. Anyone using the website will be able to log in if they wish, but not logging will allow any user to search for different autobiographies via a search bar. They will also be able to select different filters to narrow down the results, i.e. date/genre/author/etc. For admins who log into the application, they will also have the ability to insert new information into the database by using a front-end for.

ViewModel
The viewmodel acts as a controller of sorts, where it is able to grab/send information to both the model and the view of the system. The viewmodel will take responsibility for all of the user interactions with the view portions of the application, as well as send information to the view from the model. The controller will also be in charge of the reports that users will be able to view, as well as a reference to the autobiography(s) (MLA, Chicago, APA, etc.)

###Observer Pattern
We will be using the observer pattern on the viewmodel for the application in order to update any information the user might see. An example of how this will work with the MVVM environment is that the information that the user edits can be changed on-the-fly from the viewmodel with the correct setup. This means that if the user wants to search for another autobiography and starts to type in a new title, the books being shown can be updated automatically.

## Layering

MVVM Diagram
![alt text](https://cdn.journaldev.com/wp-content/uploads/2018/04/android-mvvm-pattern.png)
Source for image above:
https://www.journaldev.com/20292/android-mvvm-design-pattern

### Model
The Model layer within our application is going to consist of a variety of classes.  It will contain User, Book, Author and Publisher classes. It will also contain our Datalayer.  
The Book class has attributes for the Type of book, genre, Author, Title, Description, Notes, Year and Publisher.  The Publisher and Author will be arrays of the related objects,  since there can be more than one Publisher and Author.  The constructor has a param for each attribute and can only be instantiated with them. It also contains get/set methods for each attribute.    
The Publisher class has attributes for Publishers Name and Location. The constructor has a param for each attribute and can only be instantiated with them. It also contains get/set method for each attribute..
The Author class has attributes for Author Name. The constructor has a param for the attribute and can only be instantiated with it. It also contains get/set methods.
The User class has attributes for User Name, UserID, Email and Password. The constructor has a param for each of the attributes and can only be instantiated with them. It also contains get/set methods for each attribute
The Datalayer Class has an array attribute. It also has a constructor that establishes and tests a connection to the database.  There are several methods that retrieve requested data from the database, use that data to create the relevant objects, add them to the array attribute  and return that array of objects to its caller.
Exception handling will be implemented in this layer by using a global javascript error handling function. Since this is where the server side code resides, the errors will be written to a log on the server.l   

### Model-View
The model-view layer in our application will contain all of our logic for any operations that the user will want to perform. Some of those functions include, but are not limited to, searching for autobiographies, creating reports based on search results, and traversing between the different pages of the site.
Our intention with the model-view layer will be to have a two-way connection between both the view (front-end) and model (data layer) to increase faster screen loading and data collection, as well as a deliberate separation of concerns/function between the system. Having this separation of operations will allow for easier maintainability of the application as a whole for future development of the project.
In order to handle exceptions in this layer, we will be implementing a global Vue error handler in each of the Vue Classes.  This handler will handle all exceptions and write the error to a log on the server.

### View
The view layer of our application will be developed with Vue.js and will be the interface in which the user has access to the system. The view will contain items like search bars for querying the database, as well as the results from said queries. The view will not have any logic associated with the application, but rather a front-end layer design specifically for the user(s). The view will have direct access to the model-view layer of the application, which will then connect to the model layer.
Exceptions pertaining to this layer will be handled by adding a window event listener.  It will directly focus on handling promise rejections.  These errors will be written to the error console.

### Performance and Refactoring
The Database load script was initially developed in C# and loaded a Mysql database.  Early on in the project planning, It was decided that we wanted to back-end our application with Postgresql and have the loadscript developed in NodeJs.   The script was a complete rewrite but we utilised the same function based design.  As for the Database, the schema creation was exported from Mysql and manually altered to work with Postgresql.  Likewise, all of the sql commands in the database script were manually altered to work with Postgresql.  Due to the new guidelines given regarding the expected structure of the Database, we were forced to review and update the code handling the installation and population of our project database.  While doing so we took the opportunity to better organize and remove redundant code.  We added a Logic.js file that holds all functions used to sanitize and standardize the data in the TSV file.  We also removed all methods that execute specific, individualized,  sql commands and are now using 3 loosely coupled methods for sql execution.  This resulted in the removal of 6 tightly coupled methods.  The new methods make the code easier to handle while introducing any additional  sql commands.

Old Code Example
```
async function insertAuthor(author) {
    const values = [author[0]];
    const now =  pool.query(insertNewAuthor,values);

    return now;
}

async function getAuthors() {
    const client = await pool.connect();
    const result = await client.query({
        rowMode: 'array',
        text: getAuthorFromBook,
    })
    result.rows.forEach(row=>{
        authorArray.push(row );
    });

    await client.end();
    return result;
}

async function insertPublisherBook(publisherBook) {
    const values = [publisherBook.publisherid, publisherBook.bookid];
    const now =  pool.query(insertNewPublisherBook,values);

    return now;
}

async function getPublishers() {
    const client = await pool.connect();
    const result = await client.query({
        rowMode: 'array',
        text: getPubliserFromBook,
    })
    result.rows.forEach(row=>{
        publisherArray.push(row );
    });

    await client.end();
    return result;
}

```

New code Example
```

//insert an object into vain_db
async function insertObject(sql, obj) {
    
   return  pool.query(sql,obj);
    
    
}

//get object from vain_db.  must sql and array that you want populated with results
async function getObject(sql,array) {
    const client = await pool.connect();
    const result = await client.query({
        rowMode: 'array',
        text: sql,
    })
    result.rows.forEach(row=>{
        array.push(row );
    });

    await client.end();
    return result;
}

```
### Testing
We chose several different frameworks for our unit testing.  The first framework that we used, to do the very basic testing of our front end get functions is Jest.  Jest is an automated unit testing platform that is integrated into the applications scripts.  In order to run you will have to navigate to the vain-client folder from the project root folder and run the command  npm run test:unit.  Please use the commands below.

```
cd vain-client
npm run unit:test
```
This command tests the formation and functionality of our mounted axios get function in our addBookForm.vue file

```
  mounted() {
        axios.get('http://localhost:5000/reports/type').then((resp) => {
            this.bookTypeCount = resp.data;
        });
    }
```

We also used the json-server framework to mock our database.  In order to create a mocked up JSON file that represents our database, we used faker and lodash plugins.  When creating a generate.js file, Lodash allowed us to create a function that,given a number,  loops  through and creates as many books as we wanted.  Using faker, we were able to generate unique mock for each book in the loop. The lodash function is as follows.
```
module.exports = function(){
    var faker = require("faker")
    var _ =require("lodash")
 
    return{
 
        books: _.times(2000, function(n) {
            return{
                book_id:n,
                authorship:_.sample(["Y","N"]),
                title: faker.lorem.sentences(3),
                year:_.sample(["1855","1866","1824"]),
                description: faker.lorem.sentence(2),
                namedpersons:faker.name.findName(),
                notes: faker.lorem.sentences(2),
                located: faker.lorem.words(4),
                modifiedby: faker.name.firstName(),
                lastupdated: "2021-11-11T05:00:00.000Z",
                type:faker.lorem.word(10),
                subject:faker.lorem.word(10),
                name:faker.name.findName(),
                lifeyears:_.sample(["1852-1855","1866-1876","1822-1844"]),
                publisher: faker.lorem.words(2),
                publisherlocation: faker.lorem.word(8)
               
 
            }
 
        }),

```
Json-server is a mock API that runs on port 3000.  After updating the package.js file, we ran the following command in the root folder.
```
npm run generate
```
With the command executed, we then opened http://localhost:3000/books in our browser.  This page gave us 2000 mock books.
We created a books,json file containing all 2000 mock books and are able to reference them when running the following command in the vain-client folder

```
npm run unittest
```
This command will launch our vue client and our json-server at the same time.  With this running and in place, we were able to substitute our standard APIreference on port 5000 with our mock API on port 3000.
We created a unit testing page called testing.vue that executes commands referencing the mock data.  That way, we do not need to have the backend client running to test our application.

## Entity Relationship Diagram
![milestone 3 entity relationship diagram](/milestone5_erd.PNG "milestone 5 erd")

## Timeline
- [x] 9/10/21: Milestone 1 (Requirements)
- [x] 10/1/21: Milestone 2 (Design and Design Patterns)
- [x] 10/8/21: Milestone 3 (Layering)
- [x] 10/22/21: Milestone 4 (Exception Handling)
- [x] 11/5/21: Milestone 5 (Performance and Refactoring)
- [x] 11/24/21: Milestone 6 (Testing)
- [ ] 11/29/21: Milestone 7 (Deployment, Packaging)










