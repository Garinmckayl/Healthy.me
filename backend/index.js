var express = require("express")
var app = express()

var HTTP_PORT = 3000 
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.use(function(req, res) {
    res.status(404).send('Page not Found');
});

app.use(function(error, req, res, next) {
    res.status(500).send('Internal Server Error');
});
