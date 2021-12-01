<template>
  <div class="content">
    <div id="navBar">
      <h2>VAIN</h2>
      <p>Login</p>
    </div>
    <div id="container">
      <div id="filterList">
        <form action="" method="get">
          <SearchCheckBox filterName="Type" ref="type" />
          <SearchCheckBox filterName="Genre" ref="genre" />
          <input type="button" value="Apply Filters" @click="applyFilters" />
        </form>
      </div>
      <div id="results">
        <div id="book" v-for="book in books" :key="book.book_id">
        
          <p>{{book.book_id}}</p>
      
        </div>
    
      </div>
    </div>
  </div>
</template>
<script>
import SearchCheckBox from "../components/SearchCheckBox.vue";
import axios from 'axios';
export default {
  components: {
    SearchCheckBox,
  },
  data() {
    return {
      books: []
    }
  },
  methods: {
    applyFilters() {
      // Need to grab all of the data from the filter sections and put them into seperate arrays
      const typesArray = this.$refs.type.checkedType;
      const genreArray = this.$refs.genre.checkedGenre;
      
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
      if(genreArray.length !== 0){
        for(let i = 0; i < genreArray.length; i++){
  
          axios
          .get(genreRoute + "/" + genreArray[i].charAt(0))
          .then((resp) => {
            // console.log(resp.data);
            
            entireFilteredCollection = entireFilteredCollection.concat(resp.data);
            this.books = entireFilteredCollection;
            
            
          })
        }
      }

      // this.books = this.sortArray(this.books);


      console.log("types array ->> " + typesArray);
      console.log("genre array ->> " + genreArray);
      
      
      
      
    },
  },
};
</script>

<style scoped>
#navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
}
#navBar > h2 {
  padding: 2%;
}
#navBar > p {
  margin-right: 4%;
}
#filterList {
  padding-left: 3%;
  width: 15%;
  background-color: lightgrey;
  display: inline-block;
  border-top: 3px solid black;
}

#filterList > form {
  display: flex;
  flex-direction: column;
  justify-content: right;
}

#container {
  background-color: grey;
  display: flex;
}
</style>

