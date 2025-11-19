import axios from "axios"

export const getAllUser = async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:3000/users")
        res.json(data)
    } catch (err){
        res.status(500).json({
            message: "Error al obtener usuarios"
        })
    }
}