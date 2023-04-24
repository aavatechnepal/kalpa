const express = require ('express');
// const dotenv = require ('dotenv');
// dotenv.config();

const path = require ('path');
const database = require ('./database/dbConn');
const userDetails = require ('./models/userDetails');
const hbs = require ('hbs');
const headerSec = require('./models/headerSec');




const port = process.env.port || 2000;
const app = express();

app.use(express.urlencoded({extended:false}));

//setting public path/folder
const publiPath = path.join(__dirname, 'public');
app.use(express.static(publiPath));


//setting tempalte engine
app.set('view engine','hbs');
app.set('views',__dirname +  '/views');
hbs.registerPartials('views/partials');


app.get('/', async (req, res)=>{
   const showData = await userDetails.findOne({"_id" : "6440d034e93cf53d2f8179ba"});
    // console.log(showData);
   const headerData = await headerSec.findOne({"_id" : "6440e79f32fc85ce3d3d77e4"});
//    console.log(headerData);
   
   res.render('index', {
    showData : showData,
    headerData : headerData
   })
})

//admin page // pending for now

// app.get('/admin',async (req, res)=>{
//     const adminData = await userDetails.findOne({});
//     // console.log(adminData);
//     res.render('admin',{
//         adminData:adminData
//     })
// })

app.listen(port, (req, res)=>{
    console.log(`Server is running on port no : ${port}`);
})