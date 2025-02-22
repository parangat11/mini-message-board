#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    username TEXT,
    added INTEGER
);

INSERT INTO messages (message, username, added) VALUES
    ('Hola Amigo?', 'Krsna', 10),
    ('Kaise ho theek ho?', 'Encore', 10);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
