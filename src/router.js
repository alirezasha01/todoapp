import {createRouter, createWebHistory} from "vue-router"
import Done from "./components/doneTask.vue"
import Undone from "./components/undoneTask.vue"
import All from "./components/all/allTask.vue"


const routes = [
    {path: "/", name: "home", component: All},
    {path: "/undone", name: "users", component: Undone},
    {path: "/done", name: "map", component: Done},

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;