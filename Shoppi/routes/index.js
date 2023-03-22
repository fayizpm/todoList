
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');



db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'faris786',
  database: 'shoppingcart'

})
db.connect(function (err) {
  if (err)
    throw err
  console.log('databse connect')

})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});

router.post('/submit',async (req, res) => {
  let { mobilename, price, image } = req.body


  let  sql = await "insert into cart(mobile_name,price,image)value('" + mobilename + "','" + price + "','" + image + "')"
  db.query(sql, (err, result) => {
    if (err)
      throw err

    // console.log(result.insertId);
    let id = result.insertId
    let Image = req.files.image
    Image.mv("D:/faris/project/Newscrel/Shoppi/public/images/" + id + ".jpg")
    res.status(200).json({ msg: "success" })
    db.query(`update cart set image= "http://192.168.1.28:3000/images/${id}.jpg" where id=${id}`, (err, resu) => {
      if (err)
        throw err
    })
  })

})
router.get('/show',(req,res)=>{
  let sq="select * from cart"
  db.query(sq,(err,results)=>{
    if (err)
    throw err
    res.render('data',{data:results})

  })
})
module.exports = router;
