<template>
    <div class="bookcard">
        <h2>{{book.title}}</h2>
        <p>{{book.description}}</p>
    </div>
</template>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectBook() {

        }
    }
}