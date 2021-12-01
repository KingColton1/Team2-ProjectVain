<template>
  <div class="content">
    <div id="navBar">
      <h2>VAIN</h2>
      <a href='/login'>Login</a>
    </div>
    <div id="container">
      <div id="filterList">
        <form action="" method="get">
          <SearchCheckBox filterName="Type" ref="type" />
          <SearchCheckBox filterName="Subject" ref="subject" />
          <input type="button" value="Apply Filters" @click="applyFilters" />
        </form>
      </div>
      <div id="results">
        <div class="books">
          <div class="bookcard" v-for="book in books" :key="book.book_id">
              <h3>{{book.title}}</h3>
              <p><strong>{{book.year}}</strong></p>
              <p>{{book.description}}</p>
          </div>
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
  methods: {
    applyFilters() {
      // Need to grab all of the data from the filter sections and put them into seperate arrays
      const typesArray = this.$refs.type.checkedType;

      console.log("types array ->> " + typesArray);

      const subjectsArray = this.$refs.subject.checkedSubjects;

      console.log("subjects array ->> " + subjectsArray);
    },
  },
  mounted() {
    axios.get("http://localhost:5000/books").then((resp) => {
        this.books = resp.data;
    });
  },
  data() {
    return {
      books: []
    }
  }
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
</style>

