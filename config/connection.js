var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// CONNECT TO THE MYSQL SERVER AND SQL DATABASE
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mySQL with id: " + connection.threadId);
});

module.exports = connection