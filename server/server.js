require('dotenv').config();
const express = require('express');
const app= express();
const cors = require('cors');
const connection = require('./database/db');

//database connection
connection()

//middleware
app.use(express.json());
app.use(cors());

//to set port
const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log(`listening on port ${port}...`));

