const express = require ('express');
const cors = require('cors');
const app = express();
const todosRouter = require('./routes/todos-router.js')

app.use(express.json());
app.use(cors());


app.use(todosRouter);

app.listen(3000,() => console.log('app is running'));
