# Backend 

Building the REST API

What is REST?

Tech Stack

- NodeJs
- Express
- SQLite

Project Setup

```bash
npm init
```

Fill in the required information.

What we choose - 

```
package name: (backend) healthyme-backend
version: (1.0.0)
description: Healthy.me Backend
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC) MIT
```

Install Middleware


### Express
Express is a minimalistic HTTP server.

```bash
npm install --save express
```

```bash
npm install --save body-parser
```

```bash
npm install --save cors
```

Setup Express 

server.js
```
var express = require("express")
var app = express()

var HTTP_PORT = 3000 
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({"message":"OK"});
});

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});
```

Database

```bash
npm install sqlite3
```

database.js
```
var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "healthyme-db"
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }else{
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE food_entry (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, 
        calories INTEGER,
        created_by TEXT,
        created_at TEXT
        )`,
    (err) => {
        if (err) {
          // Table already created
        } else{
          // We can have some seed data here.  
        }
    });
    db.run(`CREATE TABLE workout (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, 
        calories INTEGER,
        created_by TEXT,
        created_at TEXT
        )`,
    (err) => {
        if (err) {
          // Table already created
        } else{
          // We can have some seed data here.  
        }
    });  
  }
});

module.exports = db
```

### REST Endpoints 

POST /api/foodEntry  
PUT /api/foodEntry/{foodEntryId}  
GET /api/foodEntry  
GET /api/foodEntry/{foodEntryId}  
DELETE /api/foodEntry/{foodEntryId}  

POST /api/workout  
PUT /api/workout/{workoutId}  
GET /api/workout  
GET /api/workout/{workoutId}  
DELETE /api/workout/{workoutId}  

GET /api/calorieCount  




