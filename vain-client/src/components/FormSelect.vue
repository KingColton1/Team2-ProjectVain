<template>
    <div class="field">
        <h4>{{headerText}}</h4>
        <div v-if="valueType === 'genre'">
            <select v-model="selected">
                <option disabled value="">Select a Genre</option>
                <option v-for="genre in genres" :key="genre.genre_id" :value="genre.genre_id">{{genre.genre}}</option>
            </select>
            <p>{{selected}}</p>
        </div>
        <div v-else-if="valueType === 'type'">
            <select v-model="selected">
                <option disabled value="">Select a Type</option>
                <option v-for="type in types" :key="type.type_id" :value="type.type_id">{{type.type}}</option>
            </select>
            <p>{{selected}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: {
        valueType: {
            type: String,
            required: true
        },
        headerText: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            genres: [],
            types: [],
            selected: ''
        };
    },
    mounted() {
        // call api for values
        axios.get('http://localhost:5000/genres').then((resp) => {
            console.log(resp);
            this.genres = resp.data;
        });
        axios.get('http://localhost:5000/types').then((resp) => {
            console.log(resp);
            this.types = resp.data;
        });
    },
};
</script>