const mongoose = require('../database/config');

const PrescriptionSchema = new mongoose.Schema({    
    doctorName:{
        type: String,
        require: true,
    },

    pacientName:{
        type: String,
        require: true,
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