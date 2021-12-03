<template>
    <div class="navBar">
        <h1>VAIN</h1>
        <div class="links">
            <a href='/'>Home</a>
            <a href='/login' class="active">Login</a>
            <a href='/addBook'>Add Book</a>
            <a href='/reports'>Reports</a>
        </div>
    </div>
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
                if (resp.data) {
                    window.location.href = 'http://localhost:8080/';
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
}
.login form {
    width: 25%;
    padding: 10px;
    outline: 1px solid black;
    border-radius: 5px;
}
.login #loginButton {
    background-color: #333333;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    border: none;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    border-radius: 12px;
    transition: 0.3s;
}

.login #loginButton:hover {
    background-color: #737373;
}

.login a {
    display: block;
    text-decoration: none;
    color: #3366ff;
    text-align: center;
}
</style>