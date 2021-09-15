const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const User = db.user;

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//function helps create 3 rows in database
function initial() {
    User.create({
      id: 1,
      name: "user"
    });
   
    User.create({
      id: 2,
      name: "user2"
    });
   
    User.create({
      id: 3,
      name: "user3"
    });
}