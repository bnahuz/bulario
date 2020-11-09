const mongoose = require('../database/config');
const bcrypt = require("bcryptjs");

const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    sex : {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true,
    },
    
    CRM: {
        type: String,
        required: true,
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
});

DoctorSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;