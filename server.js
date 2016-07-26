var db = require('./db');

var qry = 'select name from users';
db.query(qry, [], function(results){
  console.log(results);
});

db.get('select count(*) as total from users', [], function(result){
  console.log(result);
});
