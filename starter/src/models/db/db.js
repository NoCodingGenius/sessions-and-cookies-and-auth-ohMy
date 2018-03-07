const pgp = require('pg-promise')();

const connectionString = 'postgres://localhost:5432/auth-system-starter';
const db = pgp(connectionString);
const bcrypt = require('bcrypt');

module.exports = { db, bcrypt, connectionString };
