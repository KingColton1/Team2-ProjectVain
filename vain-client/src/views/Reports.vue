<template>
    <div class="navBar">
      <h1>VAIN</h1>
      <div class="links">
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
        <a href='/addBook'>Add Book</a>
        <a href='/reports' class="active">Reports</a>
      </div>
    </div>
    <div class="grid">
      <div class="grid-item"><BarChart dataset="counttype" charttitle="Number of Books Associated with Each Type" /></div>
      <div class="grid-item"><BarChart dataset="countsubject" charttitle="Number of Books Associated with Each Subject" /></div>
      <div class="grid-item"><BarChart dataset="countyear" charttitle="Number of Books Associated with Each Year" /></div>
      <div class="grid-item"><BarChart dataset="countauthorship" charttitle="Number of Books Associated with Authorship" /></div>
    </div>
</template>
<script>
import BarChart from '../components/BarChart.vue';
export default {
    components: {
        BarChart
    }
}
</script>
<style>
  .grid {
    display: grid;
    grid-template-columns: auto;
    margin: auto;
    width: 50%;
  }

  .grid .grid-item {
    padding: 5%;
  }
</style>