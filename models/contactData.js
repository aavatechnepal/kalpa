const mongoose = require ('mongoose');
const contactData = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
})

const clientData = mongoose.model('clientContactData', contactData);
module.exports = clientData;