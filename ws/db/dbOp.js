const sqlite3 = require('sqlite3').verbose();
const db= new sqlite3.Database('./poke.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    runQueries(db);
});


function createDatabase() {
    console.log('Create db');
    var newdb = new sqlite3.Database('./poke.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

function createTables(newdb) {
    newdb.exec(`
    CREATE TABLE IF NOT EXISTS pokedex (
        id INTEGER PRIMARY KEY,
        name TEXT DEFAULT "",
        status TEXT DEFAULT ""
      );
      
      INSERT INTO pokedex (id,name,status)
      VALUES
      (2, "ivysaur", "locked"),
      (7, "squirtle", "freedom"),
      (10, "caterpie", "locked");
        `, ()  => {
            runQueries(newdb);
    });
}

function runQueries(db) {
    db.all("select * from pokedex", "Total Pokemon", (err, rows) => {
        if (rows !== undefined) {
            rows.forEach(row => {
                console.log(row.id + "\t" +
                row.name + "\t" +
                row.status);
            });
        }
    });
}

module.exports = db;