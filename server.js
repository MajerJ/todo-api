var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useMongoClient: true});

app.options('*', cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port);

console.log('todo RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
