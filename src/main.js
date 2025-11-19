import router from './router.js'

window.addEventListener("DOMContentLoaded", router)

document.addEventListener("click", (e) => {
    if(e.target.matches("[data-link]")){
        e.preventDefault();

        const url = e.target.href.replace(window.location.origin, "");
        window.history.pushState({}, "", url);

        router();
    }
});

window.addEventListener("popstate", router);