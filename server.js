const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const port = process.env.PORT || 3000;

require('./config/database');
require('dotenv').config();

const indexRouter = require('./routes/index')
const postsRouter = require('./routes/posts')

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.use('/', indexRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`)
});