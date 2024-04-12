const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TodoList');

//Define the type of data you expect in your database
const fields = { 
    
    name: String,
    email: String

};

const Users = mongoose.model('Users', fields); //connecting to the collection users on MongoDB

const user1 = new Users({

    name: "Moses",
    email: "mosespac2015@gmail.com"

});

const user2 = new Users({

  name: "Adekola",
  email: "adekola.olagunju@gmail.com"

});


/* Save instace to your database, then
//CHECK FOR ERRORS
// using the method-Promises:you should be able to troubleshoot the issue with your 
//MongoDB code and resolve the error you're encountering.

await todo1.save()
await todo2.save()
    .then(() => {
        console.log('Todo saved successfully');
    })
    .catch((error) => {
        console.error('Error saving todo:', error);
    });

*/




/* Saving more than one variable:
**********1. Using a for loop:(if Dependent saves)***************

This approach iterates over an array containing the todo objects, calling save on each one and 
handling successes and errors within the loop

const todos = [todo1, todo2]; // Assuming you have an array of todos

async function saveTodos() {
  for (const todo of todos) {
    try {
      await todo.save();
      console.log('Todo saved successfully:', todo);
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  }
}

saveTodos();

***********2. Using Promise.all (if independent saves):********

If the save operations for each todo are independent (meaning they don't rely on the results of each other),
 you can leverage Promise.all to execute them concurrently and handle the results in a single place.

*/

const users = [user1.save(), user2.save()]; // Assuming save returns promises

async function saveUsers() {
  try {
    const savedUsers = await Promise.all(users);
    console.log('Users saved successfully:', savedUsers);
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

saveUsers();




