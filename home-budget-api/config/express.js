const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

consign({ cwd: 'api' })
.include('models')
.then('controllers')
.then('routes')
.into(app);

module.exports = app;