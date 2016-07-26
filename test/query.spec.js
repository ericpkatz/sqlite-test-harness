var db = require('../db');
var expect = require('chai').expect;

describe('users', function(){
  it.only('there are three users', function(done){
    var qry = `
      select count(*) as total
      from users
      `;
    db.get(qry, [], function(result){
      console.log(result);
      expect(result.total).to.equal(3);
      done();
    });
  });
  it('moe is a user', function(done){
    var qry = `
      select name
      from users
      where name = ?
      `;
    db.get(qry, ['moe'], function(result){
      expect(result.name).to.equal('moe');
      done();
    });
  });
  it('curly is a user', function(done){
    var qry = `
      select name
      from users
      where name = ?
      `;
    db.query(qry, ['curly'], function(results){
      expect(results[0].name).to.equal('curly');
      done();
    });
    
  });
  xit('shep is a user', function(done){
    
  });
});
