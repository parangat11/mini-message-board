const { Router } = require("express")
const indexRouter = Router()

const messages = [
    {
        text: "Hello!",
        user: "Anon",
        added: new Date()
    },
    {
        text: "'Sup?",
        user: "DreadPirateRoberts",
        added: new Date()
    }
]

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages })
})

module.exports = indexRouter