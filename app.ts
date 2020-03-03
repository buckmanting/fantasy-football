import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import reload from 'reload';
import http from 'http';

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fantasyRouter = require('./routes/fantasy');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fantasy', fantasyRouter);

// catch 404 and forward to error handler
app.use((req: any, res: any, next: any) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const server = http.createServer(app);

// Reload code here
reload(app).then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function () {
        console.info(`Listening on http://localhost:${app.get('port')}/`);
    })
}).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
});

app.get('/__reload_client__', (req: any, res: any) => {
    console.log('Reload client triggered');
    // reloadServer.reload();
    res.status(200).end();
});

module.exports = app;
