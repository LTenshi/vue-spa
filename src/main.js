import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import App from "./App.vue"

//Views
import BooksView from "./views/BooksView.vue"
import Home from "./views/HomeView.vue"

//Routes
const routes = [
    { path: "/", component: Home },
    { path: "/books", component: BooksView }
]

const appRouter = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(appRouter)

app.mount("#app")