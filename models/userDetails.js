const mongoose = require ('mongoose');

const userDetails = new mongoose.Schema({
    brandName : String,
    brandIconUrl : String,

    links:[
        {
            label : String,
            url : String,
        }
    ]

})

// const users = mongoose.model("kalpaData",userSchema);
// module.exports = users;

module.exports = mongoose.model("kalpaData", userDetails);