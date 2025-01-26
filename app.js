const express = require('express')
const app = express()
const path = require("node:path")
const { indexRouter } = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")
const messageRouter = require("./routes/messageRouter")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use("/new", newMessageRouter)
app.use("/messages", messageRouter)
app.use("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))