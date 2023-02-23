const todosService = require('../services/todos')


function getTodos (req,res) {
    const todos = todosService.getTodos();
    res.json(todos);
 
 }

 function removeToDo (req, res) {
    const todoId = req.params.todoId;
    const filteredToDo = todosService.deleteTodo(todoId)
    res.json(filteredToDo);
    
  }

  function createToDo (req,res) {
    const newTodo = req.body;
    todosService.addTodo(newTodo);
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