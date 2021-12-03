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
    <div class="content">
        <div class="section">
            <BarChart dataset="counttype" charttitle="Number of Books Associated with Each Type" />
        </div>
        <div class="section">
            <BarChart dataset="countsubject" charttitle="Number of Books Associated with Each Subject" />
        </div>
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
<style scoped>
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.section {
    width: 40%;
}
</style>