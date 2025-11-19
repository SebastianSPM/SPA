// router.js
import { routes } from "./routes.js";

export function router() {
    // Si no hay hash, enviamos a login
    const hash = window.location.hash || "#login";

    // Buscamos la página en las rutas
    const page = routes[hash] || routes["#login"];

    // Renderizamos el HTML
    document.getElementById("app").innerHTML = page.render();

    // Ejecutamos lógica posterior al render
    if (page.afterRender) page.afterRender();
}
