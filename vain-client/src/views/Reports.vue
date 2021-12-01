<template>
    <div class="navBar">
      <h2>VAIN</h2>
      <div class="links">
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
        <a href='/addBook'>Add Book</a>
        <a href='/reports' class="active">Reports</a>
      </div>
    </div>
    <BarChart dataset="counttype" charttitle="Number of Books Associated with Each Type" />
    <BarChart dataset="countsubject" charttitle="Number of Books Associated with Each Subject" />
</template>
<script>
import BarChart from '../components/BarChart.vue';
export default {
    components: {
        BarChart
    }
}
</script>