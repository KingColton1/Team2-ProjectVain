import { createApp, h } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import Reports from './views/Reports'
import SearchPage from './views/SearchPage'
import Testing from './views/Testing'

const app = createApp(App)

app.component('AddBookForm', AddBookForm)
app.component('Reports', Reports)
app.component('SearchPage', SearchPage)
app.component('Testing', Testing)

const routes = {
    '/': AddBookForm,
    '/search': SearchPage,
    '/reports': Reports,
    '/unit_test': Testing
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
