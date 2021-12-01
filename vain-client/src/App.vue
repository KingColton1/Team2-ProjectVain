<template>
 <div class="container p-5">
 <!-- <AddBookForm /> -->
 <a href="/search">Go to Search </a>
 <AddBookForm />
 <!-- genre table collapse section -->
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Genre</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="genre in genres" :key="genre.genre_id">
        
        <td>{{genre.genre_id}}</td>
        <td>{{genre.genre}}</td>
      </tr>

    </tbody>
  </table>

  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="author in authors" :key="author.author_id">
        
        <td>{{author.author_id}}</td>
        <td>{{author.author}}</td>
      </tr>
    
    </tbody>
  </table>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Type</th>
        <th scope="col">Had Help?</th>
        <th scope="col">Genre</th>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">Description</th>
        <th scope="col">Named People</th>
        <th scope="col">Notes</th>
        <th scope="col">Located</th>
        <th scope="col">Modified By</th>
        <th scope="col">Last Updated</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="book in books" :key="book.book_id">
        
        <td>{{book.book_id}}</td>
        <td>{{book.type}}</td>
        <td>{{book.hadHelp}}</td>
        <td>{{book.genre}}</td>
        <td>{{book.title}}</td>
        <td>{{book.year}}</td>
        <td>{{book.description}}</td>
        <td>{{book.namedPersons}}</td>
        <td>{{book.notes}}</td>
        <td>{{book.located}}</td>
        <td>{{book.modifiedBy}}</td>
        <td>{{book.lastUpdated}}</td>
      </tr>
    
    </tbody>
  </table>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Type</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="type in types" :key="type.type_id">
        
        <td>{{type.type_id}}</td>
        <td>{{type.type}}</td>
      </tr>
    
    </tbody>
  </table>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Publisher</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="publisher in publishers" :key="publisher.publisher_id">
        
        <td>{{publisher.publisher_id}}</td>
        <td>{{publisher.publisher}}</td>
      </tr>
    
    </tbody>
  </table>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="user in users" :key="user.user_id">
        
        <td>{{user.user_id}}</td>
        <td>{{user.fName}}</td>
        <td>{{user.lName}}</td>
        <td>{{user.email}}</td>
      </tr>
    
    </tbody>
  </table>
  </div>
</template>
<script>

//importing bootstrap 5 and axios
//import "bootstrap/dist/css/bootstrap.min.css";
import AddBookForm from './views/AddBookForm.vue';
import axios from 'axios'
export default {
  views: {
    AddBookForm
  },
  data() {
    return {
      genres:[],
      books: [],
      users: [],
      publishers: [],
      authors: [],
      types: []
    }
  },
  mounted() {
    // api caling
    axios
      .get('http://localhost:5000/genres')
      .then((resp) => {
        console.log(resp);
        this.genres = resp.data;
      });

    axios
      .get('http://localhost:5000/authors')
      .then((resp) => {
        console.log(resp);
        this.authors = resp.data;
      });

    axios
      .get('http://localhost:5000/books')
      .then((resp) => {
        this.books = resp.data;
      });

    axios
      .get('http://localhost:5000/types')
      .then((resp) => {
        console.log(resp);
        this.types = resp.data;
      });
    
    axios
      .get('http://localhost:5000/users')
      .then((resp) => {
        console.log(resp);
        this.users = resp.data;
      });

    axios
      .get('http://localhost:5000/publishers')
      .then((resp) => {
        console.log(resp);
        this.publishers = resp.data;
      });
  },
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
.navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(226, 226, 226);
  border-bottom: 0.5px solid black;
}
.navBar > h2 {
  padding: 2%;
}
.links > a {
  text-decoration: none;
  color: black;
  padding: 10px;
}
.links > a.active {
  text-decoration: underline;
}
.links > a:last-of-type {
  padding-right: 20px;
}
.links > a:hover {
  color: purple;
}
</style>