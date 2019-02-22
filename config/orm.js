var connnection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput){
        var queryString = "SELECT ?? FROM ??";
        connnection.query(queryString, [whatToSelect, tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(){

    },
    updateOne: function(){
        
    }
}

module.exports = orm;