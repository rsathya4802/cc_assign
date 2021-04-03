var express = require('express');
const routes = require('./routes')
var cors = require('cors')

var app = express()
app.use(cors())

routes(app)

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Node Server listening at http://%s:%s", "192.168.0.104", port)
})