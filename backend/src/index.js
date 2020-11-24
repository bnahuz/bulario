const express = require('express');
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controller/authUserController')(app);
require('./app/controller/authDoctorController')(app);
require('./app/controller/medicineController')(app);


app.listen(3000);