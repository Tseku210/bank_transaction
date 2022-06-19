const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "bank_transaction",
});

app.post("/create", (req, res) => {
  const userDans = req.body.userDans;
  const receiverDans = req.body.receiverDans;
  const amount = req.body.amount;
  const currency = req.body.currency;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  db.query(
    "INSERT INTO transaction (userDans, receiverDans, amount, type, date) VALUES (?, ?, ?, ?, ?)",
    [userDans, receiverDans, amount, currency, today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/transactions", (req, res) => {
  db.query("SELECT * FROM transaction", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
