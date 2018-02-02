const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
const axios = require('axios');
require('dotenv').config();

const user = require('./user-server');

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app=express(); 
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


app.post(`/api/auth/login`, user.get); 
app.post(`/api/auth/create`, user.create); 
app.delete(`/api/auth/logout`, user.logout);
app.get(`/api/getbooksbyuser`, user.books_out)

app.listen(process.env.SERVER_PORT, ()=>console.log('listening on port ' + process.env.SERVER_PORT));
