const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

const create_sql = `CREATE TABLE IF NOT EXISTS people (name VARCHAR(20))`;
connection.query(create_sql);

const insert_sql = `INSERT INTO people (name) VALUES ('Maria'), ('João'), ('Pedro')`;
connection.query(insert_sql);

const select_sql = `SELECT name FROM people`;
let html = null;
connection.promise().query(select_sql).then(([rows,]) => { 
  // names = rows;
  const names = rows.map(row => `<li>${row.name}</li>`).join('');
  html = `<h1>Full Cycle Rocks!</h1><ul>${names}</ul>`;
});

connection.end();

app.get('/', (req, res) => res.send(html));
// app.get('/', (req, res) => res.send(html));

app.listen(port, () => console.log(`Rodando na porta ${port}`));