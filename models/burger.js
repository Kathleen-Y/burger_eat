var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cbController) {
      orm.selectAll ("burger_db", function(data){
        cbController(data)  
      })  
    },
    insertOne: function(columns, values, cbController) {
      orm.insertOne("burger_db", columns, values, function(data) {
        cbController(data);
      });
    },
    updateOne: function(objColVals, condition, cbController) {
      orm.updateOne("burger_db", objColVals, condition, function(data) {
        cbController(data);
      });
    }
};

module.exports = burger;