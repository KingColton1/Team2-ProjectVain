<template>
    <div class="addBook-view">
        <h2>Add a New Book</h2>
        <form class="ui-form"> 
            <FormTextField placeholderText="Title" ref="title" />
            <br />
            <FormTextField placeholderText="Year" ref="year" />
            <br />
            <FormTextArea placeholderText="Description" ref="description" />
            <br />
            <FormTextArea placeholderText="Notes" ref="notes" />
            <br />
            <FormTextArea placeholderText="Named People" ref="people" />
            <br />
            <FormCheckList headerText="Select Author(s)" listType="author" ref="authors" />
            <br />
            <FormCheckList headerText="Select Publisher(s)" listType="publisher" ref="publishers" />
            <br />
            <FormSelect headerText="Select Genre" valueType="genre" ref="genre" />
            <br />
            <FormSelect headerText="Select Type" valueType="type" ref="type" />
            <br />
            <button type="button" @click="addBook">Add Book</button>
        </form>
    </div>
</template>
<script>
import FormTextField from '../components/FormTextField.vue';
import FormTextArea from '../components/FormTextArea.vue';
import FormCheckList from '../components/FormCheckList.vue';
import FormSelect from '../components/FormSelect.vue';
import axios from 'axios';
export default {
    components: {
        FormTextField,
        FormTextArea,
        FormCheckList,
        FormSelect
    },
    methods: {
        addBook() {
            // pull data from form fields
            const title = this.$refs.title;
            const year = this.$refs.year;
            const description = this.$refs.description;
            const notes = this.$refs.notes;
            const people = this.$refs.people;
            const authors = this.$refs.authors;
            const publishers = this.$refs.publishers;
            const genre = this.$refs.genre;
            const type = this.$refs.type;

            // validate (skipping for now)
            console.log(title);
            console.log(year);
            console.log(description);
            console.log(notes);
            console.log(people);
            console.log(authors);
            console.log(publishers);
            console.log(genre);
            console.log(type);

            // add to an array


            // then send request to server to add new book to database
            axios.post('http://localhost:5000/books',
                {
                    title: title,
                    year: year,
                    desc: description,
                    notes: notes,
                    people: people,
                    authors: authors,
                    publishers: publishers,
                    genre: genre,
                    type: type
                }
            ).then((resp) => {
                console.log(resp);
            });

        }
    }
};
</script>
<style scoped>
.addBook-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form {
    width: 600px;
}
</style>
