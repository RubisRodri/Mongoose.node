require("dotenv").config();
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json()) // esto es para que pueda recibir json y guardar
app.use(express.static("storage"))

const port = process.env.PORT || 3000
// aqui invocamos a las rutas |😎
//TODO LOCALhost/api/_______
app.use("/api", require("./routes"))
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

dbConnect();