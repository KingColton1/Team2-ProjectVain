<template>
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