import sqlite3 from 'better-sqlite3';

const db = sqlite3('database/minishop.db',{verbose: console.log});

db.prepare(
    `
    CREATE TABLE IF NOT EXIST users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eamil TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    );`
).run();

export default db;