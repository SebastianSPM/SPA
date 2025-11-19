import { routes } from './routes.js'

export default function router(){
    const path = window.location.pathname

    const view = routes[path] || routes["/"]

    view()
}