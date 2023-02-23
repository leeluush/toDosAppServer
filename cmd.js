const { getTodos, addTodo, deleteTodo,updateTodo } = require('./todos.js');

// get the todos from getTodos() and display properly to the user
function displayTodos() {
    const todos = getTodos()
     .map((item) => ` ${item.id}
     ${item.title}
     User: ${item.user}
     Category: ${item.category}
     Done?: ${item.done ? 'Yes' : 'No'}`)
        .join('\n\n')

    console.log(todos);
}

const operation = process.argv[2];

if (operation === 'create') {
    addTodo(process.argv[3]);

    console.log('added successfully');
} else if (operation === 'delete') {
    deleteTodo(Number(process.argv[3]))
    console.log('deleted successfully')
} else if (operation === 'update') {
    updateTodo(process.argv[3], process.argv[4], process.argv[5])
    console.log('update sucessfully')
} else {
    displayTodos();

}
