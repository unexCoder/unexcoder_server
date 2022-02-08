require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api')
const viewsRoutes = require('./routes/views')

console.log('welcome to unexcoder server');

// environment 
const PORT = process.env.PORT;
const URI = process.env.DB_URL;

// express app 
const app = express();

// database connection
// const dbURI = 'mongodb+srv://'+db_user+':'+db_password+'@unexcoderdb.rylpf.mongodb.net/unexcoder?retryWrites=true&w=majority';
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log('connected to db');
        app.listen(PORT); // listen for requests
    })
    .catch((err) => console.log(err))

// MIDDLEWARES
app.use(morgan('dev'))
// static folder middleware
app.use(express.static('public'));
// parser middlewares
app.use(express.urlencoded({extended:true})); 
app.use(express.json());

// VIEW ENGINE
app.set('view engine','ejs')

// unexcoder api
app.use('/api', apiRoutes);
app.use(viewsRoutes);