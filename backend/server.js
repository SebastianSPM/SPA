import express from "express"
import cors from "cors"

import authRoutes from "./routes/authRouter.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server express en el puerto ${PORT}`);
})