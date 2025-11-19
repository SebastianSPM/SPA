const BASE_URL = "http://localhost:3000";


export const api = {
    login: async (email,password) => {
        const res = await fetch(`${BASE_URL}/usuarios`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        });
        return await res.json();
    },

    getUsers: async () => {
        const res = await fetch(`${BASE_URL}/users`);
        return await res.json();
    },

    updateUser: async (id, data) => {
        const res = await fetch(`${BASE_URL}/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!res.ok) return null;
        return await res.json();
    }
};
