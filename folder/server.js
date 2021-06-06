const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('./models/users');
require('./models/folder');
require('./models/file');

// creates temp user and root folder
require('./models/init');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/folder',{useUnifiedTopology: true , useNewUrlParser: true });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',require('./routes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})