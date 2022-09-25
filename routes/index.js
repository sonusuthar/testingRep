var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection(
  {
    host: 'database-test.cazy6opwdrq5.ap-northeast-1.rds.amazonaws.com',
    port: 3306,
    database: 'test',
    user: 'admin',
    password: 'Octal#321'
  });
let a;
  connection.connect(function (err) {
    if(err){
       a="error occurred while connecting";
        console.log("error occurred while connecting",err);
    }
    else{
      a="connection created with Mysql successfully";
        console.log("connection created with Mysql successfully");
    }
 });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title:a });
});

module.exports = router;
