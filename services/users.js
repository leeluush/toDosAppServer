const { readFileSync, writeFileSync } = require('fs');
const { get } = require('http');



function getUsers() {
    const value = JSON.parse(readFileSync('./users-data.json'))       
    return value;
}

function setUsers(users) {
    const value = JSON.stringify(users)
    writeFileSync('./users-data.json', value);
}

function userAutentication (userName, password) {
    const user = getUsers().find(user => user.userName === userName)
    if (user && user.password === password) {
     return user 
    } else {
     return false
    }
 }
 

 function registarNewUser ({userName,password,email}) {
    const currentUsers = getUsers();
    currentUsers.push({
        id: btoa(Math.random()),
        userName, 
        password,
        email,
    });
    setUsers (currentUsers)
}


function removeUser(userName, password) {
    const currentUsers = getUsers();
    const updatedUsersList = currentUsers.filter(user => user.userName !== userName || user.password !== password);
    setUsers(updatedUsersList);
     return (updatedUsersList)

  }

  

function updateUser(userName,keyToUpdate) {
    const currentUsers = getUsers();
    
    const userToUpdate = currentUsers.find(user => user.user === userName)
    

    if(userToUpdate){
        userToUpdate[keyToUpdate] = userName;
        setUsers(currentUsers);
    }
}


function login (loginUser) {
    const allUserData = getUsers();
    const matchUser = allUserData.find ((user)=> user.userName)
}

module.exports = {
    getUsers,
    registarNewUser,
    removeUser,
    updateUser,
    userAutentication

}