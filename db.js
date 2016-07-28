var sqlite3 = require('sqlite3');
var path = require('path');

var _db;

module.exports = {
  connect: function(cb){
    if(_db)
      return cb(_db);
    var file = path.join(__dirname, process.env.DB);
    console.log(file);

    new sqlite3.Database( file , function(err){
      console.log(err);
      _db = this;
      cb(_db);
    });
  },
  query: function(qry, params, cb){
    this.connect(function(db){
      db.all(qry, params, function(er, results){
        cb(results);
      }); 
    });
  },
  get: function(qry, params, cb){
    this.connect(function(db){
      db.get(qry, params, function(er, result){
        cb(result);
      }); 
    });
  }
};
/*

new sqlite3.Database('acme.db', function(err){
  var db = this;
  db.all('select * from users where name = ? and id = ?', ['moe', 1], function(err, results){
    console.log(results);
  });

  db.get('select count(*) as total from users', function(err, result){
    console.log(result.total);
  });
});
*/
