const router = require('express').Router();
const usersController = require('../controllers/users.js')

router.get('/api/users', usersController.getUsers);
router.delete('/api/users/:userName/:password', usersController.removeUser);
router.post("/api/login", usersController.login);
router.post('/api/register', usersController.registarNewUser);
router.put('/api/users/:userName', usersController.updateUser);



module.exports = router;
