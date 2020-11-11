const express = require('express');
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controller/authUserController')(app);
require('./app/controller/authDoctorController')(app);

app.listen(3000);