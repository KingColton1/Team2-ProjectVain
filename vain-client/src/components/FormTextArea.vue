<template>
    <div class="field">
        <textarea v-model="message" :placeholder=placeholderText />
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    props: {
        placeholderText: {
            type: String
        }
    },
    data() {
        return {
            message: ''
        }
    }
};
</script>