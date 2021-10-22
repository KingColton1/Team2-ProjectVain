To run:
- should have vain_db created
- in vain-backend folder open cmd window
-- run npm install
-- run npm run serve
-- should display 'running on port 5000' or some similar message
-- check http://localhost:5000/books and the books data should be displayed (as gross non-formatted json)
- while vain-backend is still running
- in vain-client folder open new cmd window
-- run npm install again
-- run npm run serve
-- should display 'app running at localhost:8080'
-- go to http://localhost:8080/ to verify that the add a book form is displayed and the table w/all of the book data is also

*note if your login information for postgres is different than user=postgres and password=student you will need to go into index.js in the vain-backend folder to reflect that (lines 11-18)*

I have done very little testing with this, please message me with any issues - Sarah

I've also uploaded a script create_vaindb.sql that you should run in postgres to create the db and tables and insert all of the data - nate is having issues with this though