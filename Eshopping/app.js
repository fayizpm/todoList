var express=require('express')
var app=express();
var fileupload=require('express-fileupload')
var path=require('path')
var bodyParser = require('body-parser')

const indexRouter=require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',indexRouter)
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileupload())

// port
app.listen(3000,()=>{
    console.log("running....3000");
})