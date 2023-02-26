const express = require ('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/users-router.js')

app.use(express.json());
app.use(cors());


app.use(usersRouter);

app.listen(3000,() => console.log('app is running'));
