<template>
    <div class="field" v-if="listType === 'author'">
        <h3>{{headerText}}</h3>
        <p>{{checkedAuthors}}</p> <!-- use this info to display the selected ones below the search area -->
        <div class="search">
            <input type="text" placeholder="Search..." v-model.trim="inputAuthor" />
        </div>
        <div class="list" v-show="inputAuthor">
            <div class="item" v-for="author in authors" :key="author.author_id" v-show="authorVisible(author)" >
                <input type="checkbox" v-model="checkedAuthors" :name="author.name" :value="author"/>
                <label :for="author.name">{{author.name}}</label>
            </div>
        </div>
    </div>
    <div class="field" v-else-if="listType === 'publisher'">
        <h3>{{headerText}}</h3>
        <p>{{checkedPublishers}}</p>
        <div class="search">
            <input type="text" placeholder="Search..." v-model.trim="inputPublisher" />
        </div>
        <div class="list" v-show="inputPublisher">
            <div class="item" v-for="publisher in publishers" :key="publisher.publisher_id" v-show="publisherVisible(publisher)" >
                <input type="checkbox" v-model="checkedPublishers" :name="publisher.publisher" :value="publisher"/>
                <label :for="publisher.publisher">{{publisher.publisher}}</label>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
            checkedPublishers: [],
            inputAuthor: '',
            inputPublisher: ''
        };
    },
    methods: {
        authorVisible(author) {
            let currentAuthor = author.name.toLowerCase();
            let currentInput = this.inputAuthor.toLowerCase();
            return currentAuthor.includes(currentInput);
        },
        publisherVisible(publisher) {
            let currentPublisher = publisher.publisher.toLowerCase();
            let currentInput = this.inputPublisher.toLowerCase();
            return currentPublisher.includes(currentInput);
        }
    },
    mounted() {
        axios.get('http://localhost:5000/namedpersons').then((resp) => {
            this.authors = resp.data;
        });
        axios.get('http://localhost:5000/publishers').then((resp) => {
            this.publishers = resp.data;
        });
    }
};
</script>