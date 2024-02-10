require("dotenv").config()
const express = require("express")
const app = express()
const mainRouter = require("./routes/main")
const notFoundMidlleware = require("./middleware/not-found")

port = process.env.PORT || 5000

// middlewares
app.use(express.static('./public'))
app.use(express.json())

app.use("/api/v1", mainRouter)

app.use(notFoundMidlleware)

const start = async () => {
    try {
        app.listen(port, () => { 
            console.log(`Server is running at ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()