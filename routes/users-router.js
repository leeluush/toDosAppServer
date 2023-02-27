const router = require('express').Router();
const { application } = require('express');
const usersController = require('../controllers/users.js')

router.get('/api/users', usersController.getUsers);
router.delete('/api/users/:userName/:password', usersController.removeUser);
router.post('/api/register/users', usersController.registarNewUser);
router.put('/api/users/:userName', usersController.updateUser);

router.post('/api/users', userService.registarNewUser);
router.post("/api/login", userService.login);


module.exports = router;
