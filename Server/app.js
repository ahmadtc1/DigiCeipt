const express = require('express');
//Initializing the express application
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/bookAPI');

const Receipt = require('./models/receiptModel');

//Assigning a port to the server
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

receiptRouter = require('./src/routes/receiptRoutes')(Receipt);

app.use('/api', receiptRouter);





app.get('/', (req, res) => {
    res.send("Welcome to my API!");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
