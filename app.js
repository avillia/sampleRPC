const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const rpcRouter = require('./routes/rpc');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/rpc', rpcRouter);

module.exports = app;


