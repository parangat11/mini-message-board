const db = require('../db/queries')

function newMessageGet(req, res) {
    res.render('form')
}

async function newMessagePost(req, res) {
    const message = req.body.messageText, username = req.body.messageUser, added = 10;
    await db.insertMessages(message, username, added)
    res.redirect('/')
}

module.exports = {
    newMessageGet,
    newMessagePost,
}