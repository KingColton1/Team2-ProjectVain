process.on('unhandledRejection',(reason, promise)=>{
    console.log(reason+'          '+promise);
});
const {createDBs, insertBook, getPubliserFromBook, insertNewPublisher, getPubliserWithBookIDFromBook, getPubliserWithPublisherIDFromPublisher, insertNewPublisherBook,
    getAuthorFromBook, getAuthorWithBookIDFromBook, getAuthorWithAuthorIDFromAuthor, insertNewAuthor, insertNewAuthorBook,ifDBExists} = require('./sql.js');
const {credentials, credentialsMain} = require('./creds.js');
const { Pool, Client } = require("pg");
var pgtools = require("pgtools");
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const input = fs.createReadStream("vain.tsv");

const bookArray = [];
const dbArray= [];

const publisherArray = [];
const publisherBookArray=[];
const publisherPublisherArray=[];
const publisheridBookidArray=[];

const authorArray = [];
const authorBookArray=[];
const authorAuthorArray=[];
const authoridBookidArray=[];


  
const poolMain = new Pool(credentialsMain);


  
const pool = new Pool(credentials);



  function readLines({ input }) {
    const output = new stream.PassThrough({ objectMode: true });
    const rl = readline.createInterface({ input });
    rl.on("line", line => { 
      output.write(line);
    });
    rl.on("close", () => {
      output.push(null);
    }); 
    return output;
  }


  
  // Connect with a client.

  async function checkForVainDB() {
    const client = await poolMain.connect();
    const result = await client.query({
        rowMode: 'array',
        text: ifDBExists,
    })
    result.rows.forEach(row=>{
        dbArray.push(row );
    });

    await client.end();
    return result;
}

async function CreateDB() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query(createDBs);
    await client.end();
  console.log(now);
    return now;
}



async function insertBooks(book) {
    const values = [book.type, book.hadHelp, book.genre, book.title, book.year, book.description, book.namedPersons, book.notes, book.located, book.publisher, book.author];
    const now =  pool.query(insertBook,values);
    
    return now;
}



async function insertPublisher(publisher) {
    const values = [publisher.location, publisher.publisher, publisher.full];
    const now =  pool.query(insertNewPublisher,values);
    
    return now;
}

async function insertPublisherBook(publisherBook) {
    const values = [publisherBook.publisherid, publisherBook.bookid];
    const now =  pool.query(insertNewPublisherBook,values);
    
    return now;
}


async function insertObject(sql, obj) {
    const values = obj;
    const now =  pool.query(sql,values);
    
    return now;
}

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

async function getPublisherWithPublisher() {
    const client = await pool.connect();
    const result = await client.query({
        rowMode: 'array',
        text: getPubliserWithPublisherIDFromPublisher,
    })
    result.rows.forEach(row=>{
        publisherPublisherArray.push(row );
    });

    await client.end();
    return result;
      
   }

async function getPublisherWithBook() {
    const client = await pool.connect();
    const result = await client.query({
         rowMode: 'array',
         text: getPubliserWithBookIDFromBook,
    })
    result.rows.forEach(row=>{
        publisherBookArray.push(row );
    });
    await client.end();
    return result;
}

async function insertAuthor(author) {
    const values = [author[0]];
    const now =  pool.query(insertNewAuthor,values);
    
    return now;
}

async function insertAuthorBook(authorBook) {
    const values = [authorBook.authorid, authorBook.bookid];
    const now =  pool.query(insertNewAuthorBook,values);
    
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

async function getAuthorWithAuthor() {
    const client = await pool.connect();
    const result = await client.query({
        rowMode: 'array',
        text: getAuthorWithAuthorIDFromAuthor,
    })
    result.rows.forEach(row=>{
        authorAuthorArray.push(row );
    });

    await client.end();
    return result;
      
   }

async function getAuthorWithBook() {
    const client = await pool.connect();
    const result = await client.query({
         rowMode: 'array',
         text: getAuthorWithBookIDFromBook,
    })
    result.rows.forEach(row=>{
        authorBookArray.push(row );
    });
    await client.end();
    return result;
}

  
  
(async () => {
    let i=0;
    
    
    
    for await (const line of readLines({ input })) {
        let my_book = {};
        const rls = line.split('\t');
        my_book.type =fixtypeandgenre(rls[0]);
        my_book.hadHelp= fixtypeandgenre(rls[1]);
        my_book.genre= fixtypeandgenre(rls[2]);
        my_book.author= fixdescriptionandnotes(rls[3]);
        my_book.title= fixdescriptionandnotes(rls[4]);
        my_book.publisher= fixdescriptionandnotes(rls[5]);
        
        my_book.description= fixdescriptionandnotes(rls[7]);
        my_book.namedPersons= fixdescriptionandnotes(rls[8]);
        my_book.notes= fixdescriptionandnotes(rls[9]);
        my_book.located= fixdescriptionandnotes(rls[10]);
        
        if(rls[6].length >4){
            my_book.year=  rls[6].substring(0,4);
        }else if(rls[6].length <4){
            my_book.year=  "9999";
        }else if(rls[6].includes("?")){
            my_book.year=  "9999";
        }else{
            my_book.year=  rls[6];
        }
    
        if(i==0){
            i++;
        }else {
            bookArray.push(my_book);
        

        }
    
        
  }
  
})();
 
  
(async () => {
    await checkForVainDB();
if(dbArray.length == 1){
    await pgtools.dropdb(credentialsMain, "vain_db");
    await pgtools.createdb(credentialsMain, "vain_db");
}else{
    await pgtools.createdb(credentialsMain, "vain_db");
    }
           
  const clientResult = await CreateDB();

   await Promise.all(bookArray.map(async (elem) => {
        try {
            await insertObject(insertBook,[elem.type, elem.hadHelp, elem.genre, elem.title, elem.year, elem.description, elem.namedPersons, elem.notes, elem.located, elem.publisher, elem.author]);
            
        } catch (error) {
          console.log('error'+ error);
          console.log(elem);
          
        }
      }))
     
    console.log("Done adding books");
    console.log("adding publishers");
    await getObject(getPubliserFromBook,publisherArray);
    //await getPublishers();

    await Promise.all( publisherArray.map(async (elem) => {
        try {
            await insertObject(insertNewPublisher,splitPublisher(elem));
            
        } catch (error) {
          console.log('error'+ error);
          console.log(elem);
          
        }
      }))
      await getObject(getPubliserWithBookIDFromBook, publisherBookArray);
      //await getPublisherWithBook();
      await getObject(getPubliserWithPublisherIDFromPublisher, publisherPublisherArray);
      //await getPublisherWithPublisher();
      await matchPublisherBook();
      await Promise.all( publisheridBookidArray.map(async (elem) => {
        try {
            await insertObject(insertNewPublisherBook,[elem.publisherid, elem.bookid]);
            
        } catch (error) {
          console.log('error'+ error);
          console.log(elem);
          
        }
      }))
      console.log("Done adding Publishers");
      console.log("adding Authors");
      await getObject(getAuthorFromBook, authorArray);
      //await getAuthors();
      await Promise.all( authorArray.map(async (elem) => {
        try {
            await insertObject(insertNewAuthor,[elem[0]]);
            
        } catch (error) {
          console.log('error'+ error);
          console.log(elem);
          
        }
      }))
      await getObject(getAuthorWithBookIDFromBook, authorBookArray);
      //await getAuthorWithBook();
      await getObject(getAuthorWithAuthorIDFromAuthor, authorAuthorArray);
      //await getAuthorWithAuthor();
      await matchAuthorBook();
      await Promise.all( authoridBookidArray.map(async (elem) => {
        try {
            await insertObject(insertNewAuthorBook,[elem.authorid, elem.bookid]);
            
        } catch (error) {
          console.log('error'+ error);
          console.log(elem);
          
        }
      }))
      console.log("Done adding Authors");
      console.log("Database has been loaded");
  
    pool.end();
    process.exit(1);

  

  })();



function matchPublisherBook(){

    publisherBookArray.forEach(x=>{

        publisherPublisherArray.forEach(y=>{

            if(x[1] == y[1]){
                let publisherBook ={};
                publisherBook.bookid = x[0];
                publisherBook.publisherid=y[0];
                publisheridBookidArray.push(publisherBook);
            }
        });

    });

}

function matchAuthorBook(){

    authorBookArray.forEach(x=>{

        authorAuthorArray.forEach(y=>{

            if(x[1] == y[1]){
                let authorBook ={};
                authorBook.bookid = x[0];
                authorBook.authorid=y[0];
                authoridBookidArray.push(authorBook);
            }
        });

    });

}

  function splitPublisher(_s){
    let my_publisher = {};
        s = _s[0].split(':');
       

            my_publisher.location =s[0];
            my_publisher.publisher =s[1];
            my_publisher.full = _s[0];
     
   
    return [s[0],s[1],_s[0]];
    // return my_publisher;
  }

  function fixdescriptionandnotes(_s){
   // É
 
    _s = _s.normalize("NFD").replace(/\p{Diacritic}/gu, " ")
   
    
   _s = _s.replace(/'+/g, "''"); 
   _s =  _s.replace(/"/g, ""); 
   _s =   _s.trim();
   _s = _s.replace(/\?+/g,'Unknown');
   
    return _s;
 }
 function fixtypeandgenre(_s){

    _s.replace(/["]+/g, ''); 
    _s.replace(/[']+/g, "''"); 
    _s.trim();
    
    if(_s.includes("?")){

        _s="U";
    }else if(_s == 'unknown'){
        _s="U";
    }else if(_s==''){
        _s = "U";
    }else if(_s.length>2){
        _s="U"
    }
    return _s;
 }


