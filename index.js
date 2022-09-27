const app = require('express')(); //get express

const root = {root:__dirname||'e'}

var rqtime = 5000;

var cors = require("cors");

app.use(cors());

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //get xml http request

//enable cors

//get ./
app.get('/', function(req, res){
    res.send(`/xhr?u={url}&force={string}
    <\br>
    `);
});

//get /xhrs?u=url
app.get('/xhr', function(req, res){
var rt = setTimeout(function(){
  res.json({"stat":"BAD"});
},rqtime);
q=req.query;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    console.log('XHTTP: '+xhttp.readyState);
    if(xhttp.readyState==4){
        var data = {
            stat:"OK",
            response:xhttp.responseText,
            type:xhttp.responseType||"unknown",
            status:xhttp.status
        }
        res.sendFile('1x1.gif', root);
        var dweeter = new XMLHttpRequest();
        dweeter.onreadystatechange = function(){
            if(dweeter.readyState==4){
                clearTimeout(rt);
                res.sendFile('1x1.gif', root);
                console.log(gendweet(forcee));
            }
            console.log('DWEET: '+dweeter.readyState);
        }
        forcee = (!!q.force?q.force:'auto-force');
        function gendweet(force) {
            var url = `https://dweet.io/dweet/for/${force}?stat=${data.stat}&response=${data.response}&type=${data.type}&status=${data.status}`;
            console.log(data);
            return encodeURI(url);
        }
dweeter.open('GET', gendweet(forcee), true);
dweeter.send();
    }
} //end readystatechange
xhttp.open('GET', !!q.u?q.u:"https://swru.adaptable.app/");
console.log(!!q.u?q.u:"https://swru.adaptable.app/");
xhttp.send();
}); //end /xhr

app.listen(process.env.PORT||3000);