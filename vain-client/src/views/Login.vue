<template>
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
    width: 50%;
    padding: 10px;
    outline: 1px solid black;
    border-radius: 5px;
}
</style>