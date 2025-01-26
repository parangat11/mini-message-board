const { Router } = require("express")
const { messages } = require("./indexRouter")
const newMessageRouter = Router()

newMessageRouter.get("/", (req, res) => {
    res.render("form")
})

newMessageRouter.post("/", (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect("/")
})

module.exports = newMessageRouter