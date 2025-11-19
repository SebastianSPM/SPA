import { api } from "../utils/api.js";

const Dashboard = {
    render() {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            window.location.hash = "#login";
            return "<p>Redirigiendo...</p>";
        }

        return `
            <div>
                <h2>Bienvenido, ${user.name}</h2>

                <h3>Editar perfil</h3>
                <form id="form-edit-user">
                    <label>Nombre</label>
                    <input id="edit-name" type="text" value="${user.name}" required>

                    <label>Email</label>
                    <input id="edit-email" type="email" value="${user.email}" required>

                    <label>Contraseña</label>
                    <input id="edit-password" type="password" placeholder="Nueva contraseña">

                    <button type="submit">Guardar cambios</button>
                </form>

                <button id="logout-btn">Cerrar sesión</button>
            </div>
        `;
    },

    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;

        // Cerrar sesión
        const logoutBtn = document.querySelector("#logout-btn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.hash = "#login";
        });

        // Editar usuario (UPDATE)
        const form = document.querySelector("#form-edit-user");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const newName = document.querySelector("#edit-name").value;
            const newEmail = document.querySelector("#edit-email").value;
            const newPassword = document.querySelector("#edit-password").value;

            const updatedUser = {
                name: newName,
                email: newEmail
            };

            if (newPassword.trim() !== "") {
                updatedUser.password = newPassword;
            }

            // PATCH /users/:id
            const result = await api.updateUser(user.id, updatedUser);

            if (result) {
                // Actualiza localStorage para mantener sesión correcta
                localStorage.setItem("user", JSON.stringify(result));
                alert("Información actualizada");
            } else {
                alert("Error actualizando datos");
            }
        });
    }
};

export default Dashboard;
