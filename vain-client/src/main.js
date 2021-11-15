import { createApp } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'
import Reports from './views/Reports'

const app = createApp(App)

app.component('AddBookForm', AddBookForm)
app.component('Reports', Reports)

app.mount('#app')
