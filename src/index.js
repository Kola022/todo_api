// ** 1. Importing the Express Framework 
const express = require("express");

// ** 2. Creating an Express Application Instance: **
const app = express(); 
const PORT = 5000;

const todoController = require("./TodoController/TodoController");// Import the functions in the controller module
const todoData = require("./Models/TodosData");


const db = require("./db");



//Middleware to read JSON data

app.use(express.json());

//Middleware to always connect to database

app.use(function (req, res, next){

    db.connect();

    next();

});

// ** 3. Handling POST Requests to Create Todos: **
app.post('/todos', (req,res)=>{

    const type = req.body.type;
    const task = req.body.task;
    const assigned = req.body.assigned;
    const statusReport = req.body.statusReport;

    
    const createData = todoController.createTodos(type, task, assigned, statusReport);

    res.json(createData); 
});


// ** 4. Handling GET Requests to List All Todos: **

app.get('/todos', async (req, res) => {

      try {
   
      const allTodos = await todoController.getAllTodos();
  
      
      res.json(allTodos);
    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: "Error fetching todos" });
    }
  });






// ** 5 PUT Route Handler with Controller Function Call:**
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  const updatedData = req.body; // Access updated data from request body

  try {
    const updatedTodo = await todoController.updateTodo(id, updatedData);
    if (updatedTodo) {
      res.json(updatedTodo); // Send the updated todo object
    } else {
      res.status(404).json({ message: `Todo with ID ${id} not found` }); // Not found error
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating todo" });
  }
});




 

// ** DELETE Route Handler with Controller Function Call:**
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters

  try {
    const message = await deleteTodo(id);
    res.json(message); // Send the success or error message from the controller
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting todo" }); // Internal server error
  }
});



//test
app.get ('/', (req,res)=> {
    res.send('Hello World')
});


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));


  