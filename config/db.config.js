'use strict' ;

const mysql = require('mysql');

const dbConn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'node_crud_test',
	port : 3306
});

dbConn.connect(function(err)
{
	if(err) throw err;
	console.log("Database Connected!");
});

module.exports = dbConn;