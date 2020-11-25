const mongoose = require('../database/config');

const AppointmentSchema = new mongoose.Schema({    
    doctorEmail:{
        type: String,
        require: true,
        lowercase: true
    },

    pacientEmail:{
        type: String,
        require: true,
        lowercase: true
    },

    prescriptions:{
        type: Array,
        require: true,
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;