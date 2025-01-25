const express = require('express')
const app = express()
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/new", newMessageRouter)
app.use("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))