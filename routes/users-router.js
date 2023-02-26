const router = require('express').Router();
const usersController = require('../controllers/users.js')

router.get('/api/users', usersController.getUsers);
router.delete('/api/user/:userName', usersController.removeUser);
router.post('/api/user', usersController.registarNewUser);
router.put('/api/user/:userName', usersController.updateUser);

module.exports = router;
