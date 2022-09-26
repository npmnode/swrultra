const app = require('express')(); //get express

var cors = require("cors");

app.use(cors());

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //get xml http request

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//enable cors

//get ./
app.get('/', function(req, res){
    res.send(`/xhr?u={url}&force={string}
    <\br>
    `);
});

//get /xhrs?u=url
app.get('/xhr', function(req, res){
q=req.query;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(xhttp.readyState==4){
        var data = {
            response:xhttp.responseText,
            type:xhttp.responseType||"unknown",
            status:xhttp.status
        }
        
    }
}
xhttp.open('GET', !!q.u?q.u:'https://swru.adabtable.app/', true);
});

app.listen(process.env.PORT||3000, console.log);