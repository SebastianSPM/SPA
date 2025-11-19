import { api } from "../utils/api.js";

const Login = {
    render() {
        return `
            <div>
                <h2>Login</h2>
                <form id="form-login">
                    <label>Email</label>
                    <input id="email" type="email" required />

                    <label>Password</label>
                    <input id="password" type="password" required />

                    <button type="submit">Acceder</button>
                </form>
            </div>
        `;
    },

    afterRender() {
        const form = document.querySelector("#form-login");
        if (!form) return;

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();

            const data = await api.login(email, password);

            console.log("DATA LOGIN:", data);

            if (data.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.hash = "#dashboard";
            } else {
                alert("Credenciales incorrectas");
            }
        });
    }
};

export default Login;
