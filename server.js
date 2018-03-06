var express = require('express');
var override = require('method-override');
var parser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');

app.use(routes);

app.listen(PORT, function(){
    console.log('App is listetig to localhost:' + PORT);
})