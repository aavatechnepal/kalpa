const mongoose = require ('mongoose');
const headerSec = new mongoose.Schema({
    paragraph1 : String,
    paragraph2 : String,
    leftheading : String,
    paragraph3 : String,
    rightimg : String,
})

module.exports = mongoose.model('headermainsection', headerSec);