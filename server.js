const express = require('express');
const dotenv = require('dotenv');

//Load config file
dotenv.config({path: './.env'});

const app = express();



//Profile routes;
app.use('/api/v1/profile', require('./routes/profile'));
const port = process.env.PORT || 5050;


    //Set static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port, () => {
    console.log(`Server running on port ${port}!` )
});