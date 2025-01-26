const { Router } = require("express")
const messageRouter = Router({ mergeParams: true })
const { messages } = require("./indexRouter")

messageRouter.use("/:messageID", (req, res) => {
    const message = messages[req.params.messageID]
    res.render("message", { message: message })
})

module.exports = messageRouter