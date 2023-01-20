const express = require ("express");

const app = express();

const port = 3000;

const bodyParser = require ('body-parser');

const {v4: uuidv4} =require('uuid');

app.use(bodyParser.json()); //application middleware, looks for incoming data

app.get("/", (req, res) => {
    res.send("Hello Nathan!");
});

app.post('/login', (req, res) => {
    const loginUser = req.body.userName;
    const loginPassword = req.body.password; //access password
    console.log(req.body);
    console.log('Login username:'+loginUser);
    if (loginUser=="Amireal18@gmail.com" && loginPassword=="Iamreal!8"){
        const loginToken = uuidv4();
        res.send(loginToken);
    } else {
        res.status(401);
        res.send('Incorrect password for '+loginUser);
    }
});

app.listen(port, () => {
    console.log("listening");
});