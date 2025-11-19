const BASE_URL = "http://localhost:4000"

export const api = {
    login: async (email,password) => {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})

        })
        return await res.json();
    },

    getUsers: async () => {
        const res = await fetch(`${BASE_URL}/users`)
        return await res.json();
    }
}