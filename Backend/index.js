const express = require("express");
require('./db/postgres')
const bodyParser = require('body-parser')
const taskRouter = require('./routes/tasks')

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log('app is running on post:', port);
})