const pool = require("./pool")

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages")
  return rows
}

async function insertMessages(message, username, added) {
  await pool.query("INSERT INTO messages (message, username, added) VALUES ($1)", [message, username, added])
}

module.exports = {
  getAllMessages,
  insertMessages
}