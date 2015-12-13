var express = require('express');

var app = express();

app.get('/', function(req, res){
        console.log("hello world!")
        res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
        app.listen(4001);
        console.log('Express started on port 3000');
}
