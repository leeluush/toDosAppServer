const { readFile, writeFile } = require('fs/promsies');



async function getUsers() {
    const value = JSON.parse(await readFile('./users-data.json'))
    return value;
}

async function getUser(userId) {
    const user = (await getUsers()).find(user => user.id === userId)
    return user
}



async function setUsers(users) {
    const value = JSON.stringify(users)
    await writeFile('./users-data.json', value);
}

async function login({ userName, password }) {
    const user = (await getUsers()).find(user => user.userName === userName)
    if (user && user.password === password) {
        return user
    } else {
        return false
    }
}


async function registarNewUser({ userName, password, email }) {
    const currentUsers = await getUsers();
    currentUsers.push({
        id: btoa(Math.random()),
        userName,
        password,
        email,
    });
    setUsers(currentUsers)
}


async function removeUser(userName, password) {
    const currentUsers = await getUsers();
    const updatedUsersList = currentUsers.filter(user => user.userName !== userName || user.password !== password);
    await setUsers(updatedUsersList);
    return (updatedUsersList)

}



async function updateUser(userName, keyToUpdate) {
    const currentUsers = await getUsers();

    const userToUpdate = currentUsers.find(user => user.user === userName)


    if (userToUpdate) {
        userToUpdate[keyToUpdate] = userName;
        await setUsers(currentUsers);
    }
}




module.exports = {
    getUsers,
    registarNewUser,
    removeUser,
    updateUser,
    login,
    getUser

}