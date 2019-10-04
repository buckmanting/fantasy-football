const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const reload = require('reload');
const http = require('http');
const watch = require('node-watch');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const server = http.createServer(app);

// const reloadServer = reload(app).then(function (reloadReturned) {
//     // reloadReturned is documented in the returns API in the README
//
//     // Reload started, start web server
//     server.listen(app.get('port'), function () {
//         console.log('Web server listening on port ' + app.get('port'));
//     })
// }).catch(function (err) {
//     console.error('Reload could not start, could not start server/fantasy-football app', err);
// });

app.locals.liveReload = true;

const reloadServer = reload(app);
watch(path.join(__dirname, '/views'), {recursive: true}, (event, name) => {
    console.log('View changed: reloading client');
    reloadServer.reload();
});

app.get('/__reload_client__', (req, res) => {
    console.log('Reload client triggered');
    reloadServer.reload();
    res.status(200).end();
});

app.listen(app.get('port'), error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`Listening on http://localhost:${app.get('port')}/`);
    }
});

module.exports = app;
