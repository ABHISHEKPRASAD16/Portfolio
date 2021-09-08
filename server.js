const express = require('express');
const connectDB = require('./config/db');
const { check, validationResult } = require('express-validator');
const path = require('path')

const app = express();

//connect mangodb
connectDB();

//Init Middleware
app.use(express.json({extended: false}));



//define routes

app.use('/api/users',require('./routes/api/users'));

app.use('/api/auth',require('./routes/api/auth'));


app.use('/api/profile',require('./routes/api/profile'));


app.use('/api/posts',require('./routes/api/post'));

// SERVE STATIC ASSEST AND PRODUCTION
if(process.env.NODE_ENV === 'production') {

    //Set static folder
    app.use(express.static(client/build));
    app.get('*',( req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Running server on PORT ${port}`));