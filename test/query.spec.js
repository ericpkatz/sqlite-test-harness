var db = require('../db');
var expect = require('chai').expect;

describe('users', function(){
  it('there are three users', function(done){
    var qry = `
      select name
      from users
      `;
    db.query(qry, [], function(results){
      expect(results.length).to.equal(3);
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
    db.get(qry, ['curly'], function(result){
      expect(result.name).to.equal('curly');
      done();
      
    });
    
  });
  xit('shep is a user', function(done){
    
  });
});
