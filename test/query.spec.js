var db = require('../db');
var expect = require('chai').expect;
var chalk = require('chalk');

describe('users', function(){
  before(function(done){
    db.connect(function(conn){
      conn.on('profile', function(sql, time){
        console.log(chalk.blue(sql));
        console.log(chalk.magenta(time/1000 + ' seconds'));
      });
      done();
    });
  }); 

  it('there are three users', function(done){
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
