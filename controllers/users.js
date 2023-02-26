const usersService = require('../services/users')


function getUsers (req,res) {
    const users = usersService.getUsers();
    res.json(users);

 
 }

 function removeUser (req, res) {
    const userName = req.params.userName
    const filteredUser = usersService.deleteUser(userName);
    res.json(filteredUser);
    
  }

  function registarNewUser (req,res) {
    const newUser = req.body;
    usersService.registarNewUser(newUser);
    res.json(newUser)

  }

  function updateUser(req, res) {
    const userName = req.params.userName;
    const keyToUpdate = req.body.keyToUpdate;
    const newPassword = req.body.newPassword;
    usersService.updateUser(userName, keyToUpdate, newPassword);
    res.json(userToupdate)
}






module.exports = {getUsers,removeUser,registarNewUser,updateUser}