import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config"; // configure reading from .env

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cors({origin: '*'}));

var con = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/', (req, res) => {
    const { fname, lname, email } = req.body;
    con.query('INSERT INTO users (fname, lname, email) VALUES (?, ?, ?)', [fname, lname, email], (err, result) => {
      if (err) {
        res.json({ status: 'failed' });
        console.log("error aa gya", err);
      } else {
        res.json({ status: 'success' });
      }
    });
});


let DB = [];

app.listen(2000, () => {
    console.log('Server started on http://localhost:2000');
});