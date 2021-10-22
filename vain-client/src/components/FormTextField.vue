<template>
    <div class="field">
        <input type="text" v-model="text" :placeholder=placeholderText />
        <p>{{text}}</p>
    </div>
</template>
<script>
export default {
    props: {
        labelText: {
            type: String,
            required: false
        },
        placeholderText: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            text: ''
        };
    },
};
</script>