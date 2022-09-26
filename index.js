const app = require('express')();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
app.get('/', function(req, res){
    res.send(`/xhr?u={url}&force={string}
    <\br>
    `);
});
app.get('/xhr', function(req, res){
q=req.query;
var xhttp = new XMLHttpRequest();
xhttp.
xhttp.open('GET', !!q.u?q.u:'https://swru.adabtable.app/');
});

app.listen(process.env.PORT||3000, console.log);