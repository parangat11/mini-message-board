const { Router } = require("express")
const indexController = require('../controllers/indexController')
const indexRouter = Router()

// const messages = [
//     {
//         text: "Hello!",
//         user: "Anon",
//         added: new Date()
//     },
//     {
//         text: "'Sup?",
//         user: "DreadPirateRoberts",
//         added: new Date()
//     }
// ]

indexRouter.get("/", indexController.getMessages)

module.exports = indexRouter