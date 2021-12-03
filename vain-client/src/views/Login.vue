<template>
    <div class="login">
        <h1>Login</h1>
        <form>
            <FormTextField placeholderText="Email" ref="email" />
            <FormTextField placeholderText="Password" ref="pwd" />
            <button id='loginButton' type="button" @click="login">Login</button><br />
            <a href='/signup'>Create an account</a>
        </form>
    </div>
</template>
<script>
import FormTextField from '../components/FormTextField.vue';
import axios from 'axios';
export default {
    components: {
        FormTextField
    },
    methods: {
        login() {
            // pull data and make sure fields are not empty
            const email = this.$refs.email.text;
            const password = this.$refs.pwd.text;

            // check to make sure not null, not worth time rn

            // make some sort of api request
            const loginvar = {
                email: email,
                password: password
            }

            axios.get('http://localhost:5000/login', loginvar)
            .then(resp => {
                console.log(resp.data);
                if (resp.data.fields[0]["user_id"]) {
                    // window.location.href = 'http://localhost:8080/';
                }
            })
            .catch(error => console.error(error.response.data));
        }
    }
}
</script>
<style scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
}
.login form {
    width: 50%;
    padding: 10px;
    outline: 1px solid black;
    border-radius: 5px;
    margin-bottom: 20px;
}
</style>