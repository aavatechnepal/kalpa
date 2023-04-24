const mongoose = require ('mongoose');
const userDetails = require('../models/userDetails');
const headerSec = require ("../models/headerSec");
mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/KalpabrikshyaDatabase?retryWrites=true&w=majority')


.then(()=>{
    console.log(`Database Connected !`);
})


// userDetails.create({
//     brandName : 'sunil sharma',
//     brandIconUrl : 'kalpalogo.png',
       
//     links:[
//         {
//             label : 'Home',
//             url : '/',

//         },
//         {
//             label : 'About',
//             url : '/about',

//         },
//         {
//             label : 'why Kalpabriskhya',
//             url : '/whykalpabrikshya',

//         },
//         {
//             label : 'Our Investment',
//             url : '/ourinvestment',

//         },
//         {
//             label : 'Contact Us',
//             url : '/contactus',

//         },
//     ]

// })


//for header section
// headerSec.create({
//     paragraph1: 'safe investment are our res',
//     paragraph2 : 'सुरक्षित लगानी, हाम्रो जिम्मेवारी!',
//     leftheading : 'Kalpabrikshya Will Give',
//     paragraph3 : 'kalapt is hte noa ont eiKalpabrikshya Holdings is an investment company based in Kathmandu, Nepal, focused  on investing in early-stage technology startups. Founded in 2022, the company is known for its unique investment strategy and portfolio of innovative companies. ',    
//     rightimg : 'IMG/rbg4.gif',


// })





.catch((error)=>{
    console.log(`Database Not Connected ! ${error}`);
})