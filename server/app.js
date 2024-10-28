require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors");
const { Pool } = require("pg");

//Middleware
app.use(cors());
app.use(express.json()); //This line makes it easier to access information in the request

app.get("/", async (req, res) => {
    res.json({message: "Welcome to Alec's capstone project"});
});


app.post("/todo", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await Pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(err.message)
    }
})

module.exports = app;