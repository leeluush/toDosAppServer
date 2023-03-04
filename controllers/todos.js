const todosService = require('../services/todos')


async function getTodos (req,res) {
    const user = req.user;
    const todos = await todosService.getTodos(user.id);
    res.json(todos);
 
 }

 function removeToDo (req, res) {
    const todoId = req.params.todoId;
    const filteredToDo = todosService.deleteTodo(todoId)
    res.json(filteredToDo);
    
  }

  async function createToDo (req,res) {
    const newTodo = req.body;
    const user = req.user; 

    newTodo.user = userId;
    const todos = await todosService.getTodos(userId);
    res.json(newTodo)

  }

  function updateToDo(req, res) {
    const todoId = req.params.todoId;
    const keyToUpdate = req.body.keyToUpdate;
    const newTitle = req.body.newTitle;
    todosService.updateTodo(todoId, keyToUpdate, newTitle);
    res.json(todoToupdate)
}




module.exports = {getTodos,removeToDo,createToDo,updateToDo}