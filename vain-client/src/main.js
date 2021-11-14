import { createApp, h } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import SearchPage from './views/SearchPage'

const app = createApp(App)

const routes = {
    '/': AddBookForm,
    '/search': SearchPage
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

// app.component('AddBookForm', AddBookForm)
app.component('SearchPage', SearchPage)

createApp(simpleRouter).mount('#app')
