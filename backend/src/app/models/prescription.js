const mongoose = require('../database/config');

const PrescriptionSchema = new mongoose.Schema({    
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

    observations:{
        type: String,
        require: true,
    },

    medicines:{
        type: Array,
        require: true,
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;