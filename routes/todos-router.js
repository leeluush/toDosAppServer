const router = require('express').Router();
const todosController = require('../controllers/todos.js')

router.get('/api/todos', todosController.getTodos);
router.delete('/api/todos/:todoId', todosController.removeToDo);
router.post('/api/todos', todosController.createToDo);
router.put('/api/todos/:todoId', todosController.updateToDo);

module.exports = router