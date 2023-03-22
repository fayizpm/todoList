const { query } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

db = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'faris786',
  database: 'demo'

})
db.connect(function (err) {
  if (err)
    throw err
  console.log('databse connect')

})

/* GET home page. */
router.get('/', function (req, res) {

  try {
    let sql = "select  mob_staff, concat(fname_staff,lname_staff) as names	from staff_register"
    db.query(sql, function (err, result) {
      res.status(200).json({ result })
    })
  }
  catch (error) {
    res.status(500).json({ err: "internal  error" })
  }
})
router.get('/id', function (req, res) {
  try {
    let sql = "SELECT Name,MObNO,AccountName,Address1,Name,MobNo, Supplier,SupplierMob FROM customer,accounts INNER JOIN supplier"
    db.query(sql, function (err, result) {

      res.send(result)
    })
  } catch (err) {
    res.status(500).json({ err: " server error" })
  }
})
router.get('/result', function (req, res) {
  try {
    let sql = "SELECT Name as name_ , MobNo as  numbers, 'customer' type,AccountName as account_types from customer,accounts UNION SELECT Supplier as name_ ,SupplierMob as numbers , 'supplier' type,AccountName as account_types from supplier,accounts UNION SELECT concat(fname_staff,lname_staff) as name_ ,mob_staff as numbers , 'staff' type,AccountName as account_types from staff_register,accounts"
    db.query(sql, function (err, result) {
      res.send(result)
      // console.log(result);

    })
  }
  catch (error) {
    res.status(500).json({ err: " server error" })

  }

})

module.exports = router;
