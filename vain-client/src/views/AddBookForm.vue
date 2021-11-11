<template>
    <div class="addBook-view">
        <h2>Add a New Book</h2>
        <form class="ui-form"> 
            <FormTextField placeholderText="Title" ref="title" />
            <br />
            <FormTextField placeholderText="Year" ref="year" />
            <br />
            <FormTextField placeholderText="Located" ref="located" />
            <br />
            <FormTextArea placeholderText="Description" ref="description" />
            <br />
            <FormTextArea placeholderText="Notes" ref="notes" />
            <br />
            <FormTextArea placeholderText="Named Persons" ref="named" />
            <br />
            <div class="authorship">
                <h3>Self Authored?</h3>
                <input type="radio" name="authorship" value="Y" v-model="authorship" /> Yes <br />
                <input type="radio" name="authorship" value="N" v-model="authorship" /> No <br />
                <input type="radio" name="authorship" value="U" v-model="authorship" /> Unknown <br />
            </div>
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
    data() {
        return {
            authorship: ''
        }
    },
    methods: {
        addBook() {
            // pull data from form fields
            const title = this.$refs.title.text;
            const year = this.$refs.year.text;
            const description = this.$refs.description.message;
            const notes = this.$refs.notes.message;
            const authors = this.$refs.authors.checkedAuthors;
            const publishers = this.$refs.publishers.checkedPublishers;
            const genre = this.$refs.genre.selected;
            const type = this.$refs.type.selected;
            const authorship = this.authorship;
            const named = this.$refs.named.message;
            const located = this.$refs.located.text;

            // validate (skipping for now)

            // add to an array
            var bookvar =  {
                title: title,
                year: year,
                description: description,
                notes: notes,
                authorship: authorship,
                namedpersons: named,
                located: located,
                modifiedby: "System",
                lastupdated: "2021-11-11"
            };
            console.log(bookvar);

            var bookId = null;
            // first send request to add book
            axios.post('http://localhost:5000/books', bookvar)
            .then((resp) => {
                console.log(resp);
                bookId = resp.data.rows[0].book_id;
                if (bookId == null) {
                    return;
                }
                // then send request to add book author (using returned id)
                authors.forEach(author => {
                    var authorvar = {
                        author_id: author.author_id,
                        book_id: bookId // hard coded temporarily
                    };
                    axios.post('http://localhost:5000/bookAuthors', authorvar)
                    .then((resp) => {
                        console.log(resp);
                    }).catch(error => console.error(error.response.data));
                });

                // book type
                var typevar = {
                    type_id: type,
                    book_id: bookId
                };
                axios.post('http://localhost:5000/bookTypes', typevar)
                .then((resp) => {
                    console.log(resp);
                }).catch(error => console.error(error.response.data));

                // book publisher
                publishers.forEach(publisher => {
                    var publishervar = {
                        publisher_id: publisher.publisher_id,
                        book_id: bookId // hard coded temporarily
                    };
                    axios.post('http://localhost:5000/bookPublishers', publishervar)
                    .then((resp) => {
                        console.log(resp);
                    }).catch(error => console.error(error.response.data));
                });

                // book subject
                var subjectvar = {
                    subject_id: genre,
                    book_id: bookId
                };
                axios.post('http://localhost:5000/bookSubjects', subjectvar)
                .then((resp) => {
                    console.log(resp);
                }).catch(error => console.error(error.response.data));
            }).catch(error => console.error(error.response.data));

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
