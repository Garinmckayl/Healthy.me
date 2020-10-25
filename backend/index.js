var express = require("express")
var app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
    var errors=[]
    if (!req.body.name){
        errors.push("No name specified");
    }
    if (!req.body.calories){
        errors.push("No calories specified");
    }
    if (!req.body.entry_date_time){
        errors.push("No entry_date_time specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    db.run(
        `INSERT INTO food_entry (name, calories, entry_date_time, created_by, created_at) VALUES (?,?,?,?,?)`,
        [req.body.name, req.body.calories, req.body.entry_date_time, 'user', new Date().toISOString()],
        function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.status(201).json({
            "id": this.lastID
        })
    });
});
app.get("/api/foodEntry", (req, res, next) => {
    db.all("select * from food_entry", [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(rows);
      });
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
