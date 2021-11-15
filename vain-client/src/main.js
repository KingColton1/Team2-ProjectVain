import { createApp, h } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import Reports from './views/Reports'
import SearchPage from './views/SearchPage'

const app = createApp(App)

app.component('AddBookForm', AddBookForm)
app.component('Reports', Reports)
app.component('SearchPage', SearchPage)

const routes = {
    '/': AddBookForm,
    '/search': SearchPage,
    '/reports': Reports
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
