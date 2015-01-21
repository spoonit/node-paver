var express = require('express');
var app = express();

var hbs = require('hbs');

var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', {title:"Home"});
});

app.get('/about', function(req, res) {
	res.render('about', {title:"About Me"});
});

app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article', {title:entry.title, blog:entry});
});

app.get('/stupidworld', function(req, res) {
	res.render('stupidworld', {title:"Stupid World"});
});

app.get('/music', function(req, res) {
	res.render('music', {title:"Music"});
});

app.get('/blog', function(req, res) {
	res.render('blog', {title:"My Blog", entries:blogEngine.getBlogEntries()});
});


app.listen(3000);
