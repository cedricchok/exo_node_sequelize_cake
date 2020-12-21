// Creation serveur via npm i express
// Creation route
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Creation route
app.get('/', (req, res) => {
    res.status(200).send('Buches');
});

// With Router and Controller
const bucheRouter = require('./routes/cake.route');
app.use('/cakes', bucheRouter);

// Running server
app.listen(port, () => {
    console.log('C\'est good, le serveur tourne');
})