var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart');
var aboutRouter = require('./routes/about');
var itemsRouter = require('./routes/items');
var authRouter = require('./routes/signin');
var adminRouter = require('./routes/admin');
var searchRouter = require('./routes/search');
var thirdPartyRouter = require('./routes/3rdparty');

var app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/about', aboutRouter);
app.use('/items', itemsRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/3rdparty', thirdPartyRouter);

module.exports = app;