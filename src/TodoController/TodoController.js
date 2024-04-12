const Todos = require("../Models/TodosData");// Import the Todos model


// Function to create a new todo item
function createTodos(type, task, assigned, statusReport) {
    const todo = new Todos({  // Create a new Todos object with provided data
      type,
      task,
      assigned,
      statusReport,
    });
  
//     // Save the newly created todo to the database (assuming Todos has a save method)
    todo.save(); // Use async/await or Promises for error handling (explained later)
    return todo;
  };


// OR
// function createTodos(type, task, assigned, statusReport){

//     const todo = new Todos;

//     todo.type = type;
//     todo.task = task;
//     todo.assigned = assigned;
//     todo.statusReport = statusReport;

//     todo.save();
 
//     return todo;
    
// };

// Function to retrieve all todos
function getAllTodos() {
    return Todos.find({}); // Find all Todos documents in the database (replace with specific query if needed)
  };
 

  // **  Update function**
  async function updateTodo(id, updatedData) {
    try {
      //  Todos.findByIdAndUpdate exists for updating by ID
      const updatedTodo = await Todos.findByIdAndUpdate(id, updatedData, { new: true }); // Return updated document
  
      if (!updatedTodo) {
        return { message: `Todo with ID ${id} not found` }; // Not found error
      }
  
      return updatedTodo; // Return the updated todo object
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for handling in the route handler
    }
  }
  

  

  



// //Delete Function 
async function removeTodo(id) {
    try {
      const deletedTodo = await Todos.findByIdAndDelete(id);
  
      if (deletedTodo) {
        return { message: `Todo ${id} was deleted` }; // Success message
      } else {
        return { message: `Todo with ID ${id} not found` }; // Not found error
      }
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for handling in the route handler
    }
  };
  
  

module.exports = {// Export the functions for use in other modules
    createTodos,
    getAllTodos,
    updateTodo,    
    removeTodo
    
};