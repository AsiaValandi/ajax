

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static('js'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    next();
});

app.get("/data", function(request, response){
    response.sendfile("index.html");
});
app.listen(8080);

app.post('/data', function (request, response) {
    checkBrowser(request.body.browser);
});



function checkBrowser(data) {
    if (data === false){
        throw "error"
    }

}