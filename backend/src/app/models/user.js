const mongoose = require('../database/config');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
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

    doctorsIDS : {
        type: Array,
        required: false
    },

    prescriptionIDS : {
        type: Array,
        required: false

    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;