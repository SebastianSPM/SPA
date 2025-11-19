import axios from "axios"

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const { data: users } = await axios.get("http://localhost:3000/users")

        const user = users.find(
            u => u.email === email && u.password === password
        )

        if(!user){
            return res.status(401).json({
                message: "Credenciales invalidas"
            })
        }

        res.json({
            message: "Login exitoso",
            user: {
                id: user.id,
                name: user.name,
                role: user.role
            }
        })
    } catch (err){
        res.status(500).json({
            message: "error en el servidor"
        })
    }
}