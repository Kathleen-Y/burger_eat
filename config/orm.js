var connection = require("./connection.js");

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
   selectAll: function (tablename, cbModel) {
       connection.query("SELECT * FROM ??", tablename, function(err, data){
         cbModel(data)
       })  
     },

    insertOne: function (tablename, columns, values, cbController) {
      var queryString = "INSERT INTO " + tablename;

      queryString += " (";
      queryString += columns;
      queryString += ")";
      queryString += " VALUES (' ";
      queryString += values;
      queryString += " ') ";
      console.log(queryString)
      connection.query(queryString, values, function(err, data) {
        if (err) {
          throw (err);
        }
        cbController(data);
      });
    },

    updateOne: function(tablename, objColVals, condition, cbController) {

      var queryString = "UPDATE " + tablename;
      queryString += " SET ";
      queryString += objToSql(objColVals.devoured);
      queryString += " WHERE ";
      queryString += condition;
      connection.query(queryString, function(err, data) {
        if (err) {
          throw err;
        }
      cbController(data);
      });
    }
}

module.exports = orm;