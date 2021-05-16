//let's create an express server and create an app trhough it by importing all dependancies.
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//initialize all middlewares
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true, //to enable cookies
  })
);

//initialize the hashing algorithm for the passwords, this is a dependancy
const bcrypt = require("bcrypt");
const saltRounds = 10; //property of hashing

//apply middlewares for cookies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, //it expires in 24h(it is in milliseconds)
    },
  })
);

//connect to DB
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Moneyfarm239",
  database: "CashAppDB",
});

//route to inset a new user to db
app.post("/register", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
//aks if the user is logged in 
app.get("/login", (req, res) => {
  if (req.session.email) {
    res.send({ loggedIn: true, email: req.session.email });
  } else {
    res.send({ loggedIn: false });
  }
});

//check if user exists
app.post("/login", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
              if (response) {
                req.session.email = result;
                console.log(req.session.email); //to show the session in terminal(id, email, password)
                res.send(result); //send user to fontend
              } else {
                res.send({ message: "Wrong username/password combination!" });
              }
            });
      } else {
        res.send({ message: "User doesnt exist!" });
      }
    }
  );
});


//listen to the port
app.listen(3306, () => {
  console.log("running server");
});
