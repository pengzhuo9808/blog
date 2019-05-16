import index from "../components/index.vue"
import addblog from "../components/addblog.vue"
import singblog from "../components/singblog.vue"

export default [
    {path:"/",component:index},
    {path:"/add",component:addblog},
    {path:"/blog/:id",component:singblog}
]