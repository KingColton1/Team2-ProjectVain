<template>
  <div class="content">
    <div id="navBar">
      <h2>VAIN</h2>
      <p>Login</p>
    </div>
    <div id="filterList">
      <form action="" method="get">
        <h4>Type</h4>
          <SearchCheckBox filterName="Type" />
        <h4>Genre</h4>
      </form>
    </div>
  </div>
</template>
<script>
import SearchCheckBox from '../components/SearchCheckBox.vue';
export default {
  components: {
    SearchCheckBox
  }
}
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
</style>

