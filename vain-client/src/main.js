import { createApp, h } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import Reports from './views/Reports'
import SearchPage from './views/SearchPage'
import Signup from './views/Signup';
import Login from './views/Login';
import Home from './views/Home';
<<<<<<< HEAD
import VueCookies from 'vue3-cookies'
import Testing from './views/Testing'
=======
import Testing from './views/Testing';
import EditBookForm from './views/EditBookForm';
>>>>>>> a1e7baa7c9ff6753a38351fb4be0385c26360e34


const app = createApp(App)



app.component('AddBookForm', AddBookForm)
app.component('Reports', Reports)
app.component('SearchPage', SearchPage)
app.component('Login', Login);
app.component('Signup', Signup);
app.component('Home', Home);
app.component('Testing', Testing);
app.component('EditBookForm', EditBookForm)

const routes = {
    '/addBook': AddBookForm,
    '/': SearchPage,
    '/reports': Reports,
    '/login': Login,
    '/signup': Signup,
    '/home': Home,
    '/unit_test': Testing,
    '/editBook': EditBookForm
}

const simpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute]
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(simpleRouter).use(VueCookies).mount('#app')
