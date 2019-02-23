const http = require('http'),
    app = require('./config/express');

require(`./config/database`)('mongodb://localhost/home-budget');

http.createServer(app).listen(3000, function() {
    console.log('server running at 3000');
});