const router = require('express').Router();
const todosController = require('../controllers/todos.js');
const {verifyUser} = require('../middelware/auth.middelware');


router.get('/api/todos',verifyUser, todosController.getTodos);
router.delete('/api/todos/:todoId',verifyUser, todosController.removeToDo);
router.post('/api/todos', verifyUser, todosController.createToDo);
router.put('/api/todos/:todoId',verifyUser, todosController.updateToDo);

module.exports = router