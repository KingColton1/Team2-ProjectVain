*Milestone 2 - Design and Design Patterns
Sarah Irons; Colton Bailiff; Nathan Radin; David Niggli
October 1, 2021*

## Team Members and Roles
Sarah Irons - Programmer/Designer
Colton Bailiff - Front-end Lead
Nathan Radin - Team Lead
David Niggli - DB Admin
 
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
#### MVVM - Model View ViewModel
Vue uses the MVVM pattern instead of MVC, hence why we are listing MVVM as one of our patterns we plan to use.

**Model**
The model will primarily contain a Book class for each book within the database, as well as some of the database functions for the users (searching/editing). The model section will generate the different search results that the user is looking for, or create a new Book if an admin is inserting one. 

**View**
The view will be the front-end component of the application (as of writing it will be written in Vue.js) which will allow the user to do a variety of tasks. Anyone using the website will be able to log in if they wish, but not logging will allow any user to search for different autobiographies via a search bar. They will also be able to select different filters to narrow down the results, i.e. date/genre/author/etc. For admins who log into the application, they will also have the ability to insert new information into the database by using a front-end for. 

**ViewModel**
The viewmodel acts as a controller of sorts, where it is able to grab/send information to both the model and the view of the system. The viewmodel will take responsibility for all of the user interactions with the view portions of the application, as well as send information to the view from the model. The controller will also be in charge of the reports that users will be able to view, as well as a reference to the autobiography(s) (MLA, Chicago, APA, etc.)

#### Observer Pattern
We will be using the observer pattern on the viewmodel for the application in order to update any information the user might see. An example of how this will work with the MVVM environment is that the information that the user edits can be changed on-the-fly from the viewmodel with the correct setup. This means that if the user wants to search for another autobiography and starts to type in a new title, the books being shown can be updated automatically.

## Entity Relationship Diagram
![milestone 2 entity relationship diagram](/milestone2_erd.png "milestone 2 erd")

## Timeline
- [x] 9/10/21: Milestone 1 (Requirements)
- [ ] 10/1/21: Milestone 2 (Design and Design Patterns)
- [ ] 10/8/21: Milestone 3 (Layering)
- [ ] 10/22/21: Milestone 4 (Exception Handling)
- [ ] 11/5/21: Milestone 5 (Performance and Refactoring)
- [ ] 11/19/21: Milestone 6 (Testing)
- [ ] 11/29/21: Milestone 7 (Deployment, Packaging)

