const app = require('express')();

app.get('/', function(req, res){
    res('hi');
});

app.listen(process.env.PORT||3000);