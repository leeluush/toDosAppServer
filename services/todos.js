const { readFileSync, writeFileSync } = require('fs');

// 

function getTodos() {
    const value = JSON.parse(readFileSync('./data.json'))       
    return value;
}

function getTodosByUser () {
    
}

function setTodos(todos) {
    const value = JSON.stringify(todos)
    writeFileSync('./data.json', value);
}

function addTodo({title,description,user,isDone,category}) {
    const currentTodos = getTodos();
    currentTodos.push({
        id: btoa(Math.random()),
        title,
        description,
        user,
        isDone,
        category,
    });
    setTodos(currentTodos)
}

function deleteTodo(id) {
    const currentTodos = getTodos();
    const filteredTodos = currentTodos.filter(todo => todo.id !== id.toString());
    setTodos(filteredTodos);
    return (filteredTodos);
}
  

function updateTodo(id,keyToUpdate = 'title',newTitle) {
    const currentTodos = getTodos();
    
    const todoToupdate =currentTodos.find(todo => todo.id === id)
    

    if(todoToupdate){
        todoToupdate[keyToUpdate] = newTitle;
        setTodos(currentTodos);
    }
}

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}