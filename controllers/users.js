const usersService = require('../services/users')

async function getUsers (req,res) {
    const users = await usersService.getUsers();
    res.json(users);


 }

 async function removeUser(req, res) {
  const userName = req.params.userName;
  const password  = req.params.password;
  
  const updatedUsersList = await usersService.removeUser(userName,password);
  res.json(updatedUsersList);
}


  async function registarNewUser (req,res) {
    const newUser = req.body;
    await usersService.registarNewUser(newUser);
    res.json(newUser)

  }

async function login (req,res) {
  const user = req.body

  await usersService.login(user);
  
  
}


  function updateUser(req, res) {
    const userName = req.params.userName;
    const keyToUpdate = req.body.keyToUpdate;
    const newPassword = req.body.newPassword;
    usersService.updateUser(userName, keyToUpdate, newPassword);
    res.json(userToupdate)
}






module.exports = {getUsers,removeUser,registarNewUser,updateUser}