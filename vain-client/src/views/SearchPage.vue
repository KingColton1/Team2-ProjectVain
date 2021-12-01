<template>
  <div class="content">
    <div class="navBar">
      <h2>VAIN</h2>
      <div class="links">
        <a href='/' class="active">Home</a>
        <a href='/login'>Login</a>
        <a href='/addBook'>Add Book</a>
        <a href='/reports'>Reports</a>
      </div>
    </div>
    <div id="container">
      <div id="filterList">
        <form action="" method="get">
          <div id="searchBooks">
            <input type="text" placeholder="Search..." v-model.trim="inputSearch" />
          </div>
          <SearchCheckBox filterName="Type" ref="type" />
          <SearchCheckBox filterName="Subject" ref="subject" /><br />
          <input type="button" value="Apply Filters" @click="applyFilters" /><br />
          <input type="button" value="Clear Filters" @click="clearFilters" />
        </form>
      </div>
      <div id="results">
        <div class="books">
          <v-pagination
            v-model="page"
            :pages="Math.round(parseFloat(this.books.length/10))"
            :range-size="1"
            active-color="white"
          />
          <div class="bookcard" v-for="book in books.slice((0 + ((page - 1) * 10)), (page * 10))" :key="book.book_id">
              <input type="checkbox" v-model="checkedBooks" :value="book.book_id">
              <h3>{{book.title}}</h3>
              <p><strong>{{book.year}}</strong></p>
              <p>{{book.description}}</p>
          </div>
          <v-pagination
            v-model="page"
            :pages="Math.round(parseFloat(this.books.length/10))"
            :range-size="1"
            active-color="white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchCheckBox from "../components/SearchCheckBox.vue";
import axios from 'axios';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  components: {
    SearchCheckBox,
    VPagination
  },
  data() {
    return {
      books: [],
      page: 1,
      inputSearch: '',
      checkedBooks: []
    }
  },
  methods: {
    clearFilters() {
      const typesArray = this.$refs.type.checkedType;
      const subjectsArray = this.$refs.subject.checkedSubjects;

      if (typesArray.length > 0) {
        console.log(typesArray);
      }
      if (subjectsArray.length > 0) {
        console.log(subjectsArray);
      }
    },
    applyFilters() {
      // Need to grab all of the data from the filter sections and put them into seperate arrays
      const typesArray = this.$refs.type.checkedType;
      const subjectsArray = this.$refs.subject.checkedSubjects;
      
      var entireFilteredCollection = [];
      // var tempArray = [];
      var typeRoute = 'http://localhost:5000/books/book/type';
      var genreRoute = 'http://localhost:5000/books/book/genre';

      this.books = [];

      /*
       * In order to get all of the filtered results, we are going to make a seperate call to the api
       * For each filter selected by the user. Once we get the the results of a call, we concat the arrays
       * together and then sort them by thier respective book_id.
       */

      // To Note: Duplicate books are showing up if show up in multiple filters
      // Must be a way to eradicate those before sending data for user to see

      if(typesArray.length !== 0){
        for(let i = 0; i < typesArray.length; i++){
  
          axios
          .get(typeRoute + "/" + typesArray[i].charAt(0))
          .then((resp) => {
            
            entireFilteredCollection = entireFilteredCollection.concat(resp.data);
            this.books = entireFilteredCollection;
            // this.books.sort((a,b) => a.book_id - b.book_id);
          })
        }
      }
      if(subjectsArray.length !== 0){
        for(let i = 0; i < subjectsArray.length; i++){
  
          axios
          .get(genreRoute + "/" + subjectsArray[i].charAt(0))
          .then((resp) => {
            // console.log(resp.data);
            
            entireFilteredCollection = entireFilteredCollection.concat(resp.data);
            this.books = entireFilteredCollection;
            
            
          })
        }
      }
      if (typesArray.length == 0 && subjectsArray.length == 0) {
        axios.get("http://localhost:5000/books").then((resp) => {
          this.books = resp.data;
          console.log(this.books.length)
        });
      }

      // this.books = this.sortArray(this.books);

      console.log("types array ->> " + typesArray);
      console.log("subjects array ->> " + subjectsArray);
    },
  },
  mounted() {
    axios.get("http://localhost:5000/books").then((resp) => {
        this.books = resp.data;
        console.log(this.books.length)
    });
  }
};
</script>
<style scoped>
#filterList {
  padding: 10px;
  display: inline-block;
  background-color: rgb(226, 226, 226);
  border-top: 3px solid black;
}

#filterList > form {
  display: flex;
  flex-direction: column;
  justify-content: right;
  min-width: 150px;
  max-width: 200px;
}

#container {
  
  display: flex;
}

.bookcard {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0.5px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  background-color: white;
}
.Pagination {
  justify-content: center;
}
.books {
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>

