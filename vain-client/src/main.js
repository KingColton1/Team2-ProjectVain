import { createApp } from 'vue'
import App from './App.vue'
import AddBookForm from './views/AddBookForm'

const app = createApp(App)

app.component('AddBookForm', AddBookForm)

app.mount('#app')
