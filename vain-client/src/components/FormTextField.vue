<template>
    <div class="field">
        <label class='inputLabel'>{{this.$props.placeholderText}}: </label>
        <input class="fieldInput" type="text" v-model="text" :placeholder=placeholderText /><br />
    </div>
</template>
<script>
export default {
    props: {
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
<style scoped>
.field {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
}
</style>