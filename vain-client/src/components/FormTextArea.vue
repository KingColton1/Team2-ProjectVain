<template>
    <div class="field">
        <label class='inputLabel'>{{this.$props.placeholderText}}: </label>
        <textarea v-model="message" :placeholder=placeholderText /><br />
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
    width: 100%;
    margin-bottom: 10px;
}
</style>