const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config()

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a catch-all route for testing the installation.
// app.get('http://localhost:5000/*', (req, res) => res.status(200).send({
//     message: 'Hello World!',
// }));
 
//routes
require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);
require("./src/routes/image.routes")(app);
require("./src/routes/caption.routes")(app);

const port = 5000;
  
app.listen(port, () => {
    console.log('App is now running at port ', port)
})
  