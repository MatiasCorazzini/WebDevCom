const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

//Settings
app.set('port', process.env.PORT || 1800);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partiaslDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Routes
app.use(require('./routes/index.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
