const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/profile.js');

dotenv.config({path: './.env'});

const app = express();



//Profile routes;
app.use('/', routes)
app.use('/api/v1/profile', require('./routes/profile.js'));
const port = process.env.SERVER_PORT || 4000;


    //Set static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port, () => {
    console.log(`Server running on port ${port}!` )
});