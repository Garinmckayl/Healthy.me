var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./healthyme.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to ', DBSOURCE)
        db.run(`CREATE TABLE food_entry (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name NVARCHAR(100)  NOT NULL, 
            calories INTEGER NOT NULL, 
            entry_date_time TEXT NOT NULL,
            created_by TEXT,
            created_at TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            }
        });
        db.run(`CREATE TABLE workout (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name NVARCHAR(100)  NOT NULL, 
            calories INTEGER NOT NULL, 
            entry_date_time TEXT NOT NULL,
            created_by TEXT,
            created_at TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            }
        });  
    }
});


module.exports = db