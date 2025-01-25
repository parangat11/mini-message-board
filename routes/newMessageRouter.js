const { Router } = require("express")
const newMessageRouter = Router()

newMessageRouter.get("/", (req, res) => {
    res.render("new")
})

module.exports = newMessageRouter