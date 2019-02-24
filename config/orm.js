var connection = require("../config/connection.js");

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

    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'"
        }
        arr.push(key + "=" + value);
    }
};

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += queryString + ` (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)}) `;

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += ` SET ${objToSql(objColVals)} WHERE ${condition} `;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    deleteOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += ` WHERE ${condition}`;

        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    }
};

module.exports = orm;