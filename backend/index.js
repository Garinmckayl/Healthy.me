var express = require("express")
var app = express()
db = require('./db.js')

var HTTP_PORT = 3000 
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.status(200).send({"message":"I am the Healthy.me API"})
});

// FoodEntry Endpoints
app.post("/api/foodEntry", (req, res, next) => {
    res.status(201).send()
});
app.get("/api/foodEntry", (req, res, next) => {
    res.status(200).send([])
});
app.get("/api/foodEntry/:id", (req, res, next) => {
    res.status(200).send({})
});
app.put("/api/foodEntry/:id", (req, res, next) => {
    res.status(204).send({})
});
app.delete("/api/foodEntry/:id", (req, res, next) => {
    res.status(204).send()
});


app.use(function(req, res) {
    res.status(404).send('Page not Found');
});

app.use(function(error, req, res, next) {
    res.status(500).send('Internal Server Error');
});
