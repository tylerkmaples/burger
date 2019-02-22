var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bfal0b54trmm5532',
        password: 'wz8f8scugy3fxv60',
        database: 'yv3jcsu96xu11cjh',
        port: 3306
    });
};

// CONNECT TO THE MYSQL SERVER AND SQL DATABASE
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mySQL with id: " + connection.threadId);
});

module.exports = connection