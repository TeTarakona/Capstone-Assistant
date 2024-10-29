require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json()); //This line makes it easier to access information in the request

app.get("/", async (req, res) => {
  res.json({ message: "Welcome to Alec's capstone project" });
});

//This route adds a task to the todo list
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body; //Here, description is the field name in the database.
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    ); //A variable is created that is assigned the result of the awaited query. Standard SQL, with the returning statement at the end being the code that sets the variable to whatever data was inserted into the database.

    res.json(newTodo.rows[0]); //That variable then gets used to set the server response object. Rows[0] being the latest thing added to the database, IE the newly inserted task.

    //Either the above happens or everything fails and gets caught below.
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todo", async (req, res) => {
  try {
    console.log("DB Host:", process.env.host);
    console.log("DB Name:", process.env.database);
    const getTodos = await pool.query("SELECT * FROM todo");
    res.json(getTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body
    const updateItem = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
    res.json("List item updated successfully.")
  } catch (error) {
    console.error(error.message)
  }
});

app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.json("List item deleted successfully.")
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app;
