
 
 module.exports = function (app){
    
    const { getTodos, addTodo, deleteTodo, updateTodo } = require('./todos-provider.js');


app.get('/api/todos',function(req,res) {
    const todos = getTodos();
    res.json(todos);
 
 });
 
 app.delete('/api/todos/:todoId', function(req, res) {
     const todoId = req.params.todoId;
     const filteredToDo = deleteTodo(todoId)
     res.json(filteredToDo);
     
   });
 
 
   app.post('/api/todos',function(req,res) {
     const newTodo = req.body;
     addTodo(newTodo);
     res.json(newTodo)
 
   });
 
   app.put('/api/todos/:todoId', function(req, res) {
     const todoId = req.params.todoId;
     const keyToUpdate = req.body.keyToUpdate;
     const newTitle = req.body.newTitle;
     updateTodo(todoId, keyToUpdate, newTitle);
     res.json(todoToupdate)
 });

 }
 