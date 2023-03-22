var express=require('express')
const { insert, show,a, hi} = require('../controllers/cartController')
var  app=express.Router();

app.post('/insert',insert)
app.get('/show',show)
app.post('/a',a)
app.get('/',hi)

module.exports=app