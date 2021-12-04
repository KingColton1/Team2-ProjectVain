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
       <h3>{{error}}</h3>
    </div>
</template>
<script>
import FormTextField from '../components/FormTextField.vue';
import axios from 'axios';
var passwordHash = require('password-hash');

export default {
   data() {
    return {
      books: [],
      error: '',
    }
  },
    components: {
        FormTextField
    },
    methods: {
        login() {
          
            const password = this.$refs.pwd.text;
            const user = this.$refs.email.text;

            // check to make sure not null, not worth time rn

            // make some sort of api request
            const loginvar = {
                user: 'greg'
            }
            console.log(loginvar);

            axios.get('http://localhost:5000/login', loginvar)
            .then(resp => {
<<<<<<< HEAD
                if (Object.keys(resp.data).length>0) { //make sure something was returned
                               
                    this.books = resp.data; 
                    if(passwordHash.verify(password,this.books[0].password)){ //verify password

                        console.log('PW verifeid');
                       this.$cookies.set("default_unit_second","input_value",0); // session ends when browser is closed
                      this.$cookies.set('user',this.books[0]); // add user JSON object to cookies
                 
                    window.location.href = 'http://localhost:8080/'; //redirect to home page
                    }else{
                         this.error = 'Cannot log in with given Username and Password'
                    }
                   console.log( this.$cookies.get('user').role); //
                }else{
                    this.error = 'Cannot log in with given Username and Password'
=======
                console.log(resp.data);
                if (resp.data.fields[0]["user_id"]) {
                    // window.location.href = 'http://localhost:8080/';
>>>>>>> a1e7baa7c9ff6753a38351fb4be0385c26360e34
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
    width: 25%;
    padding: 10px;
    outline: 1px solid black;
    border-radius: 5px;
    margin-bottom: 20px;
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