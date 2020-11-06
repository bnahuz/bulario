const mongoose = require('mongoose');

const pass = '3tWSjzaXVnd4k6YN';

mongoose.connect(
    'mongodb+srv://bularioADM:3tWSjzaXVnd4k6YN@cluster0.iltoh.mongodb.net/bularioDEV?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true});
        
mongoose.Promise = global.Promise

module.exports = mongoose;
