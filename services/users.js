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
        userName, 
        password: btoa(Math.random()),
        email,
    });
    setUsers (currentUsers)
}


function deleteUser(userName,password) {
    const currentUsers = getUsers();
    const upDateUsersList = currentUsers.filter(user => password !== userName.password());
    setUsers(upDateUsersList);
    return (filtereUsers);
}
  

function updateUser(userName,keyToUpdate) {
    const currentUsers = getUsers();
    
    const userToUpdate = currentUsers.find(user => user.user === userName)
    

    if(userToUpdate){
        userToUpdate[keyToUpdate] = userName;
        setUsers(currentUsers);
    }
}

module.exports = {
    getUsers,
    registarNewUser,
    deleteUser,
    updateUser,
    userAutentication

}