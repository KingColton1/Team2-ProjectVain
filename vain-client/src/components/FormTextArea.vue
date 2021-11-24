<template>
    <div class="field">
        <label class='inputLabel'>{{this.$props.placeholderText}}: </label>
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
<style scoped>
.field {
    display: flex;
    flex-direction: column;
    width: 80%;
}
</style>