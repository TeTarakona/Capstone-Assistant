const express = require("express")
const app = express();
const cors = require("cors")

//Middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/", async (req, res) => {
    res.json({message: "Welcome to Alec's capstone project"});
});

module.exports = app;