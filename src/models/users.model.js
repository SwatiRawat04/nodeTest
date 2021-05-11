'use strict';
var dbConn = require('./../../config/db.config');
var Users = function(users){
  this.first_name     = users.first_name;
  this.last_name      = users.last_name;
  this.age            = users.age;
  this.dob            = users.dob;
  this.mobile         = users.mobile;
  this.email          = users.email;
  this.address        = users.address;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Users.create = function (newUsr, result) {
dbConn.query("INSERT INTO users set ?", newUsr, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Users.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  if(res.length===0){
    result({ error:true, message: 'User does not exist!' });
  }
  else{
  result(null, res);}
}
});
};
Users.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('users : ', res);
  result(null, res);
}
});
};
Users.update = function(id, users, result){
dbConn.query("UPDATE users SET first_name=?,last_name=?,age=?,dob=?,mobile=?,email=?,address=? WHERE id = ?", [users.first_name,users.last_name,users.age,users.dob,users.mobile,users.email,users.address, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Users.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Users;