var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push('?');
    }

    return arr.toString();
};

function objToSql(ob) {
    // column1 = value, column2 = value2...
    var arr = []; 
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString()
};

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += queryString + ` (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)}) `;

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += ` SET ${objToSql(objColVals)} WHERE ${condition} `;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += ` WHERE ${condition}`;

        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    }
};

module.exports = orm;