var xmlhttprequest = require('XMLHttpRequest').XMLHttpRequest;
var xhttp = new xmlhttprequest();

xhttp.onreadystatechange = function(){
    console.log(xhttp.readyState);
    if(xhttp.readyState==4) {
        console.log(xhttp.responseText);
    }
}

xhttp.open('GET', 'https://cipg.herokuapp.com/');

xhttp.send();