const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes')(app);
require('./server/config/mongoose');

app.listen(9090, function() {
    console.log("listening on port 9090");
});