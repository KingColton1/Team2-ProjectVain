<template>
    <!-- <div class="search">
        <input type="text" placeholder="Search..." v-model="search" />
    </div> -->
    <div class="field" v-if="listType === 'author'">
        <h3>{{headerText}}</h3>
        <p>{{checkedAuthors}}</p>
        <div class="item" v-for="author in authors.slice(0,6)" :key="author.author_id" >
            <input type="checkbox" v-model="checkedAuthors" :name="author.author" :value="author.author_id"/>
            <label :for="author.author">{{author.author}}</label>
        </div>
    </div>
    <div class="field" v-else-if="listType === 'publisher'">
        <h3>{{headerText}}</h3>
        <p>{{checkedPublishers}}</p>
        <div class="item" v-for="publisher in publishers.slice(0,6)" :key="publisher.publisher_id" >
            <input type="checkbox" v-model="checkedPublishers" :name="publisher.publisher" :value="publisher.publisher_id"/>
            <label :for="publisher.publisher">{{publisher.publisher}}</label>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
// import { computed, ref, watchEffect } from 'vue';
export default {
    props: {
        listType: {
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
            checkedAuthors: [],
            authors: [],
            publishers: [],
            checkedPublishers: []
        };
    },
    // setup() {

    //     const search = ref("");
    //     const searchedValues = computed(() => {
    //         return values.value.filter((author) => {
    //             return (
    //                 author.author
    //                 .toLowerCase()
    //                 .indexOf(search.value.toLowerCase()) != -1
    //             );
    //         });
    //     });

    //     watchEffect(() => console.log(searchedValues));

    //     return { searchedValues, search };
    // },
    mounted() {
        axios.get('http://localhost:5000/authors').then((resp) => {
            this.authors = resp.data;
        });
        axios.get('http://localhost:5000/publishers').then((resp) => {
            this.publishers = resp.data;
        });
    }
};
</script>