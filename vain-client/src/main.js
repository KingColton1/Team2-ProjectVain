import { createApp, h } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import Reports from './views/Reports'
import SearchPage from './views/SearchPage'
import Signup from './views/Signup';
import Login from './views/Login';
import Home from './views/Home';

const app = createApp(App)

app.component('AddBookForm', AddBookForm)
app.component('Reports', Reports)
app.component('SearchPage', SearchPage)
app.component('Login', Login);
app.component('Signup', Signup);
app.component('Home', Home)

const routes = {
    '/addBook': AddBookForm,
    '/': SearchPage,
    '/reports': Reports,
    '/login': Login,
    '/signup': Signup,
    '/home': Home
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

createApp(simpleRouter).mount('#app')
