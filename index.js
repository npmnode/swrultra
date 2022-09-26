const app = require('express')();

app.get('/', function(req, res){
    res.send('hi');
});

app.listen(process.env.PORT||3000, console.log);