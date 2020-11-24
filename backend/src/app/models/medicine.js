const mongoose = require('../database/config');

const MedicineLeafletSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },

    indications:{
        type: String,
        require: true,
    },

    howWorks:{
        type: String,
        require: true,
    },

    counterIndication:{
        type: String,
        require: true,
    },

    howToUse:{
        type: String,
        require: true,
    },

    whenForgot:{
        type: String,
        require: true,
    },

    beforeUse:{
        type: String,
        require: true,
    },

    adverseReactions:{
        type: String,
        require: true,
    },

    superdose:{
        type: String,
        require: true,
    },

    indication:{
        type: String,
        require: true,
    },

    posology:{
        type: String,
        require: true,
    }

});

const MedicineLeaflet = mongoose.model('MedicineLeaflet', MedicineLeafletSchema);

module.exports = MedicineLeaflet;