var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) createImageBitmap(err, null);
            cb(null, data);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){
        
    }
}

module.exports = orm;