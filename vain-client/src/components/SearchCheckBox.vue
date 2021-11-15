<template>
    <div class="checkbox">
        <h3>{{this.$props.filterName}}</h3>
        <div class="list">
            <div class="item" v-for="type in types" :key="type.type_id">
                <input type="checkbox" v-model="checkedType" name="type.type" :value="type.type_id"/>
                <label :for="type.type">{{type.type}}</label>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: {
        filterName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            types: [], 
            checkedType: [],   
        };
    },
    mounted() {
        axios.get('http://localhost:5000/types').then((resp) => {
            this.types = resp.data;
            console.log(this.types);
        });
    }
};
</script>
