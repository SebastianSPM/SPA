export default function Register() {
    // 1. HTML de la vista
    const view = `
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
}
