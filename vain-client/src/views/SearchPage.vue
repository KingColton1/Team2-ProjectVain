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
        <p>Books will go here</p>
      </div>
    </div>
  </div>
</template>
<script>
import SearchCheckBox from "../components/SearchCheckBox.vue";
export default {
  components: {
    SearchCheckBox,
  },
  methods: {
    applyFilters() {
      // Need to grab all of the data from the filter sections and put them into seperate arrays
      const typesArray = this.$refs.type.checkedType;

      console.log("types array ->> " + typesArray);
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

